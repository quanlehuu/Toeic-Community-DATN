const express = require("express");
const User = require("../model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

const controller = express.Router();

controller.route("/checkUsername/:username").get((req, res) => {
  User.count({ username: req.params.username }).exec((err, count) => {
    if (err) return console.log(err);
    else {
      res.json({ count: count.toString() });
    }
  });
});

controller.route("/checkEmail/:email").get((req, res) => {
  User.count({ "email.email": req.params.email }).exec((err, count) => {
    if (err) return console.log(err);
    else {
      res.json({ count: count.toString() });
    }
  });
});

controller.route("/getInfo/:name").get(async (req, res) => {
  try {
    const username = req.params.name;
    const user = await User.findOne({ username: username });
    if (user._id === req.id) {
      if (!user.birthday.isPublic) user.birthday.birthday = "";
      if (!user.phoneNumber.isPublic) user.phoneNumber.phoneNumber = "";
      if (!user.email.isPublic) user.email.email = "";
      res.json({
        success: true,
        user,
      });
    } else {
      res.json({
        success: true,
        user,
      });
    }
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }
});

controller.route("/login").post(async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.json({ success: false, usernameNotExist: true });
    } else {
      bcrypt.compare(req.body.password, user.password, async (err, correct) => {
        if (correct) {
          const token = await jwt.sign(
            { id: user._id, name: user.name },
            config.get("secret")
          );
          res.json({
            access_token: token,
            success: true,
            username: user.username,
            id: user._id,
          });
        } else res.json({ success: false });
      });
    }
  } catch (err) {
    console.log(err);
  }
});

controller.route("/getTop").get(async (req, res) => {
  try {
    const user = await User.find({}).lean().sort({ point: -1 }).limit(9);
    if (user) {
      res.json({ user, success: true });
    } else res.json({ success: false });
  } catch (e) {
    res.json({ success: false });
  }
});

controller.route("/add").post(async (req, res) => {
  const user = req.body;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) console.log(err);
    else {
      user.password = hash;
      birthday =
        user.birthday.birthday == "" ? null : new Date(user.birthday.birthday);
      user.birthday.birthday = birthday;
      const newUser = new User(user);
      newUser.save(function (err) {
        if (err) return console.log(err);
        else res.json({ success: true });
      });
    }
  });
});

module.exports = controller;
