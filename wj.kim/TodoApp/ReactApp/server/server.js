const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require("cors");

const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");

const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true,
  },
});

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

app.use(
  session({ secret: "비밀코드", resave: true, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

let corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));

var db;

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb+srv://admin:1q2w3e4r@cluster0.xfekuai.mongodb.net/?retryWrites=true&w=majority",
  (err, client) => {
    if (err) {
      return console.log(err);
    }
    console.log("db connected");
    db = client.db("todoapp");
  }
);

app.get("/", (req, res) => {
  res.send(`hello world`);
});

io.on("connection", (socket) => {
  console.log("접속됨");

  socket.on("join", ({ userName: user }) => {
    console.log("방입장");
    socket.join("room1");
    io.to("room1").emit("onConnect", `${user} 님이 입장했습니다.`);
    // send : 클라이언트가 메시지 보내는 이벤트
    // item: {name: String, msg: String, timeStamp: String}
    socket.on("onSend", (messageItem) => {
      console.log(messageItem);
      io.to("room1").emit("onReceive", messageItem);
    });

    socket.on("disconnect", () => {
      socket.leave("room1");
      io.to("room1").emit("onDisconnect", `${user} 님이 퇴장하셨습니다.`);
    });
  });
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/fail",
  }),
  (req, res) => {
    res.json(req.body);
  }
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "id",
      passwordField: "pw",
      session: true,
      passReqToCallback: false,
    },
    function (입력한아이디, 입력한비번, done) {
      //console.log(입력한아이디, 입력한비번);
      db.collection("login").findOne(
        { id: 입력한아이디 },
        function (에러, 결과) {
          if (에러) return done(에러);

          if (!결과)
            return done(null, false, { message: "존재하지않는 아이디요" });
          if (입력한비번 == 결과.pw) {
            return done(null, 결과);
          } else {
            return done(null, false, { message: "비번틀렸어요" });
          }
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((아이디, done) => {
  db.collection("login").findOne({ id: 아이디 }, (err, result) => {
    done(null, result);
  });
});

app.get("/list", (req, res) => {
  db.collection("post")
    .find()
    .toArray((err, result) => {
      res.json(result);
    });
});

server.listen(port, () => {
  console.log(`listennig on port ${port}`);
});

app.post("/add", isLogin, (req, res) => {
  db.collection("counter").findOne({ name: "게시물갯수" }, (err, result) => {
    console.log(result.totalPost);
    const { totalPost } = result;
    const data = {
      _id: totalPost,
      title: req.body.title,
      content: req.body.content,
      writer: req.body.writer,
      writerId: req.user._id,
    };

    db.collection("post").insertOne(data, (err, result) => {
      console.log("저장 완료");
      db.collection("counter").updateOne(
        { name: "게시물갯수" },
        { $inc: { totalPost: 1 } },
        (err, result) => {
          if (err) return console.log(err);
        }
      );
    });
  });
  console.log(req.body);
  res.json({ message: "post!!!!!!!" });
});

app.delete("/list/:id", isLogin, (req, res) => {
  console.log(req.user._id);
  const id = parseInt(req.params.id);
  const delData = {
    _id: id,
    writerId: req.user._id,
  };

  db.collection("post").deleteOne(delData, (err, result) => {
    if (err) console.log(err);
    if (result.deletedCount === 0) return res.send({ message: "nope" });

    console.log(result.deletedCount);
    console.log("삭제완료");
    return res.status(200).send({ message: "success!" });
  });
});

app.post("/signup", (req, res) => {
  db.collection("login").insertOne(
    { id: req.body.id, pw: req.body.pw },
    (err, result) => {
      console.log(result);
      res.json({ message: "success!" });
    }
  );
});

function isLogin(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send("is not login");
  }
}
