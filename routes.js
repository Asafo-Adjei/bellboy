const router = require('express').Router();

router.get("/", function (req, res) {
  res.render("index");
});

// router.get("/add", function (req, res) {
//   res.render("add-app");
// });

router.get("/add", function (req, res) {
  res.render("test");
});

// router.get("/add", function (req, res) {
//   res.render("manage-app");
// });


module.exports = router;