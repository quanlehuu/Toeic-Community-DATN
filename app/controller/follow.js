const express = require("express");
const User = require("../model/user");
const Following = require("../model/Following");

const controller = express.Router();

controller.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Following.find({ follower: id }).populate(
      "followee",
      "img name point username"
    );
    if (user !== null && user.length !== 0) res.json({ success: true, user });
    else res.json({ success: false });
  } catch (e) {
    res.json({ success: false });
  }
});
controller.route("/checkFollow/:id1/:id2").get(async (req, res) => {
  const id1 = req.params.id1;
  const id2 = req.params.id2;
  try {
    const user = await Following.findOne({ follower: id1, followee: id2 });
    if (user !== null) res.json({ success: true, following: true });
    else res.json({ success: true, following: false });
  } catch (e) {
    res.json({ success: false });
  }
});

controller.route("/addFollow").post(async (req, res) => {
  const id1 = req.body.id1;
  const id2 = req.body.id2;
  if (id1 === id2) {
    res.json({ error: false });
  } else
    try {
      const user = await Promise.all([
        User.findOne({ _id: id1 }),
        User.findOne({ _id: id2 }),
        Following.findOne({ follower: id1, followee: id2 }),
      ]);

      if (user[0] !== null && user[1] !== null && user[2] === null) {
        const following = new Following({ follower: id1, followee: id2 });
        following.save((err) => {
          if (err) res.json({ success: false });
          else res.json({ success: true });
        });
      } else res.json({ success: false });
    } catch (e) {
      res.json({ error: false });
    }
});
controller.route("/deleteFollow").post(async (req, res) => {
  const id1 = req.body.id1;
  const id2 = req.body.id2;
  if (id1 === id2) {
    res.json({ error: false });
  } else
    try {
      const following = await Following.findOneAndRemove({
        follower: id1,
        followee: id2,
      });
      if (following) {
        res.json({ success: true });
      } else res.json({ success: false });
    } catch (e) {
      res.json({ success: false });
    }
});

module.exports = controller;
