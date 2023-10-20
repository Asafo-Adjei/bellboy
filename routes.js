const router = require('express').Router();

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/add", function (req, res) {
  res.render("add-app");
});


module.exports = router;