const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const { mongoose } = require("./app/common/database.js");
var cors = require("cors");

const userRoute = require("./app/controller/user");
const postRoute = require("./app/controller/post");
const votePostRoute = require("./app/controller/votePost");
const voteCommentRoute = require("./app/controller/voteComment");
const commentRoute = require("./app/controller/comment");
const saveRoute = require("./app/controller/save");
const searchRoute = require("./app/controller/search");
const changePassRoute = require("./app/controller/changePassWord");
const followRoute = require("./app/controller/follow");
const notificationRoute = require("./app/controller/notification");
const getPopularTagRoute = require("./app/controller/getTag");

// Verify Middleware
const verify = require("./app/helper/verify");

const app = express();

app.use(cors());

// body parser
app.use(bodyParser.json());

app.set("views", __dirname + "/app/view");
app.set("view engine", "ejs");

// Static folder
app.use("/static", express.static(__dirname + "/public"));

app.use("/api/user", userRoute);

app.use("/api/post", verify, postRoute);

app.use("/api/votePost", verify, votePostRoute);

app.use("/api/voteComment", verify, voteCommentRoute);

app.use("/api/comment", verify, commentRoute);

app.use("/api/save", verify, saveRoute);

app.use("/api/search", verify, searchRoute);

app.use("/api/follow", verify, followRoute);

app.use("/api/notification", verify, notificationRoute);

app.use("/api/changePass", verify, changePassRoute);

app.use("/api/getPopularTag", getPopularTagRoute);

const controller = require(__dirname + "/app/controller");

app.use(controller);

app.use(function (req, res, next) {
  res.status(404).render("pageNotFound", { title: "Sorry, page not found" });
});

const port = process.env.PORT || config.get("server.port");

const server = app.listen(port, function () {
  console.log("Server is running on port ", port);
});

module.exports = app;
