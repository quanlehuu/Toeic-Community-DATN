const express = require("express");
const User = require("../model/user");

const router = express.Router();

router.get("/login", function (req, res) {
  res.render("login");
});

// router.get("/mypage", function(req,res) {
//     res.render("mypage", {id: req.id});
// });

router.get("/signup", function (req, res) {
  res.render("signup");
});
router.get("/", (req, res) => {
  res.render("Newsfeed");
});
router.get("/following", function (req, res) {
  res.render("Following");
});
router.get("/post", function (req, res) {
  res.render("Post");
});
router.get("/saved", function (req, res) {
  res.render("saved");
});
router.get("/search", function (req, res) {
  res.render("searchResult");
});
router.get("/changepassword", function (req, res) {
  res.render("changePass");
});
router.get("/video", function (req, res) {
  res.render("video");
});
router.get("/error", function (req, res) {
  res.status(404).render("pageNotFound", { title: "Sorry, page not found" });
});
router.get("/user=:name", async (req, res) => {
  const name = req.params.name;
  try {
    const user = await User.findOne({ username: name });
    if (user) {
      res.render("mypage", { name: req.params.name });
    } else {
      res.redirect("/error");
    }
  } catch (e) {
    res.redirect("/error");
  }
});

module.exports = router;
