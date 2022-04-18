const express = require("express");
const User = require("../model/user");
const mongoose = require("mongoose");
const config = require("config");
const bcrypt = require("bcrypt");

const route = express.Router();

route.route("/").post(async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    bcrypt.compare(req.body.curPass, user.password, async (err, correct) => {
      if (correct) {
        bcrypt.hash(req.body.newpass, 10, (err, hash) => {
          if (err) console.log(err);
          else {
            User.findOneAndUpdate(
              { username: req.body.username },
              { password: hash }
            ).then((res) => {
              res.json({ success: true });
            });
          }
        });
      } else res.json({ success: false });
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
