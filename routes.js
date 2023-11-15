const router = require('express').Router();
// const routers=require('path');

router.get("/", function (req, res) {
  res.render("index");
});

// router.get("/add", function (req, res) {
//   res.render("add-app");
// });

router.get("/add", function (req, res) {
  res.render("test");
});
// routers.use(require.static(path.join(__dirname,'public')));
router.get("/sub", function (req, res) {
  res.render("content-page");
});

// router.get("/add", function (req, res) {
//   res.render("manage-app");
// });


module.exports = router;