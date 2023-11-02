const router = require('express').Router();
// const routers=require('path');

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/add", function (req, res) {
  res.render("add-app");
});
// routers.use(require.static(path.join(__dirname,'public')));
router.get("/sub", function (req, res) {
  res.render("Add-app-page" , {title:'Add-app-page'});
});


module.exports = router;