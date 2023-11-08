const router = require('express').Router();

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/add", function (req, res) {
  res.render("add-app");
});

router.get("/eat", function (req, res) {
  res.render("hello");
});

router.get("/sam", function (req, res) {
  res.render("topnav");
});


module.exports = router;