const router = require("express").Router();

router.get("/sports", (req, res) => {
  res.send("SPORTS BOARD");
});

router.get("/game", (req, res) => {
  res.send("GANE BOARD");
});

module.exports = router;
