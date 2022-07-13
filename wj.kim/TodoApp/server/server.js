const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const methodOverride = require("method-override");
const { ObjectId } = require("mongodb");
const http = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

app.use(methodOverride("_method"));
app.use("/public", express.static("public"));

var db;

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb+srv://admin:1q2w3e4r@cluster0.xfekuai.mongodb.net/?retryWrites=true&w=majority",
  (err, client) => {
    if (err) {
      return console.log(err);
    }
    db = client.db("todoapp");
  }
);

http.listen(port, function () {
  console.log(`listening on port ${port}`);
});

app.get("/socket", (req, res) => {
  res.render("socket.ejs");
});

io.on("connection", (socket) => {
  console.log("접속됨");

  socket.on("room1-send", (data) => {
    io.to("room1").emit("broadcast", data);
  });

  socket.on("joinroom", (data) => {
    socket.join("room1");
  });

  socket.on("user-send", (data) => {
    io.emit("broadcast", data);
  });
});

app.get("/write", (req, res) => {
  res.render("write.ejs");
});

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/list", (req, res) => {
  db.collection("post")
    .find()
    .toArray((err, result) => {
      res.render("list.ejs", { posts: result });
    });
});

app.get("/detail/:id", (req, res) => {
  const id = parseInt(req.params.id);
  db.collection("post").findOne({ _id: id }, (err, result) => {
    console.log(result);
    res.render("detail.ejs", { data: result });
  });
});

app.get("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  db.collection("post").findOne({ _id: id }, (err, result) => {
    if (!result) return res.status(400).send("없는 데이터!");
    res.render("edit.ejs", { data: result });
  });
});

app.put("/edit", (req, res) => {
  // 폼에 담긴 데이터를 가지고
  // db.collection을 업데이트한다.
  db.collection("post").updateOne(
    { _id: parseInt(req.body.id) },
    {
      $set: {
        title: req.body.title,
        content: req.body.content,
      },
    },
    (err, result) => {
      if (err) return res.status(400).send(err);
      console.log("수정 완료");
      res.redirect("/list");
    }
  );
});

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

app.use(
  session({ secret: "비밀코드", resave: true, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/fail",
  }),
  (req, res) => {
    res.redirect("/list");
  }
);

app.get("/mypage", isLogin, (req, res) => {
  console.log(req.user);
  res.render("mypage.ejs", { user: req.user });
});

function isLogin(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send("is not login");
  }
}

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

app.post("/register", (req, res) => {
  db.collection("login").insertOne(
    { id: req.body.id, pw: req.body.pw },
    (err, result) => {
      res.redirect("/login");
    }
  );
});

app.post("/add", (req, res) => {
  db.collection("counter").findOne({ name: "게시물갯수" }, (err, result) => {
    console.log(result.totalPost);
    const { totalPost } = result;
    const data = {
      _id: totalPost,
      title: req.body.title,
      content: req.body.content,
      writer: req.user._id,
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

  db.collection("post")
    .find()
    .toArray((err, result) => {
      res.render("list.ejs", { posts: result });
    });
});

app.delete("/delete", (req, res) => {
  // console.log(req.body);
  const id = parseInt(req.body._id);
  const delData = {
    _id: id,
    writer: req.user._id,
  };

  db.collection("post").deleteOne(delData, (err, result) => {
    if (err) console.log(err);
    if (result.deletedCount === 0) return res.send({ message: "nope" });

    console.log(result.deletedCount);
    console.log("삭제완료");
    return res.status(200).send({ message: "success!" });
  });
});

app.get("/search", (req, res) => {
  console.log(req.query.value);
  const search = [
    {
      $search: {
        index: "titleSearch",
        text: {
          query: req.query.value,
          path: ["title", "content"],
        },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ];
  db.collection("post")
    .aggregate(search)
    .toArray((err, result) => {
      console.log(result);
      res.render("search.ejs", { posts: result });
    });
});

app.use("/shop", require("./routes/shop.js"));
app.use("/board/sub", require("./routes/board.js"));

let multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(nll, "/public/image");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage });

app.get("/upload", (req, res) => {
  res.render("upload.ejs");
});

app.post("/upload", upload.single("profile"), (req, res) => {
  res.send("업로드 완료");
});

app.get("/chat", isLogin, function (요청, 응답) {
  db.collection("chatroom")
    .find({ member: 요청.user._id })
    .toArray()
    .then((결과) => {
      console.log(결과);
      응답.render("chat.ejs", { data: 결과 });
    });
});

app.post("/chatroom", isLogin, function (요청, 응답) {
  var 저장할거 = {
    title: "무슨무슨채팅방",
    member: [ObjectId(요청.body.당한사람id), 요청.user._id],
    date: new Date(),
  };

  db.collection("chatroom")
    .insertOne(저장할거)
    .then(function (결과) {
      응답.send("저장완료");
    });
});

app.post("/message", isLogin, function (요청, 응답) {
  var 저장할거 = {
    parent: 요청.body.parent,
    content: 요청.body.content,
    userId: 요청.user._id,
    date: new Date(),
  };

  db.collection("message")
    .insertOne(저장할거)
    .then(function (결과) {
      console.log("DB저장 성공!");
      응답.send("성공!");
    });
});

app.get("/message/:id", isLogin, (req, res) => {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });

  db.collection("message")
    .find({ parent: req.params.id })
    .toArray()
    .then((result) => {
      res.write("event: test\n");
      res.write("data: " + JSON.stringify(result) + "\n\n");
    });

  const pipeline = [{ $match: { "fullDocument.parent": req.params.id } }];
  const collection = db.collection("message");
  const changeStream = collection.watch(pipeline);
  changeStream.on("change", (result) => {
    res.write("event: test\n");
    res.write("data: " + JSON.stringify([result.fullDocument]) + "\n\n");
  });
});
