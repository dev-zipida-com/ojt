const router = require("express").Router();

function isLogin(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send("is not login");
  }
}

router.use(isLogin);

router.get("/shirts", (req, res) => {
  res.send("셔츠 파는 페이지 입니다.");
});

router.get("/pants", (req, res) => {
  res.send("바지 파는 페이지 입니다.");
});

module.exports = router;
