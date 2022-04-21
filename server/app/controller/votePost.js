const express = require("express");
const VotePost = require("../model/VotePost");
const Post = require("../model/post");
const mongoose = require("mongoose");
const User = require("../model/user");
const ObjectId = mongoose.Types.ObjectId;

const controller = express.Router();

controller.route("/:postId").get((req, res) => {
  VotePost.findOne({
    user: ObjectId(req.id),
    post: ObjectId(req.params.postId),
  }).exec((error, data) => {
    if (!data) res.json({ voted: 0 });
    else if (data.isVoteUp) res.json({ voted: 1 });
    else res.json({ voted: -1 });
  });
});

controller.route("/").post(async (req, res) => {
  await Post.findById(ObjectId(req.body.post))
    .populate("ofUser", "point")
    .exec((err, post) => {
      if (err) console.log(err);
      else {
        let point = req.body.isVoteUp
          ? post.ofUser.point + 1
          : post.ofUser.point - 1;
        User.findByIdAndUpdate(
          ObjectId(post.ofUser._id),
          { point: point },
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    });
  const votePost = new VotePost({
    user: ObjectId(req.id),
    post: ObjectId(req.body.post),
    isVoteUp: req.body.isVoteUp,
  });
  votePost.save();
});

controller.route("/").put(async (req, res) => {
  await Post.findById(ObjectId(req.body.post))
    .populate("ofUser", "point")
    .exec((err, post) => {
      if (err) console.log(err);
      else {
        let point = req.body.isVoteUp
          ? post.ofUser.point + 2
          : post.ofUser.point - 2;
        User.findByIdAndUpdate(
          ObjectId(post.ofUser._id),
          { point: point },
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    });
  VotePost.findOne({
    user: ObjectId(req.id),
    post: ObjectId(req.body.post),
  }).exec((error, votePost) => {
    votePost.isVoteUp = req.body.isVoteUp;
    votePost.save();
  });
});

controller.route("/").delete(async (req, res) => {
  await Post.findById(ObjectId(req.body.post))
    .populate("ofUser", "point")
    .exec((err, post) => {
      if (err) console.log(err);
      else {
        let point = req.body.isVoteUp
          ? post.ofUser.point - 1
          : post.ofUser.point + 1;
        User.findByIdAndUpdate(
          ObjectId(post.ofUser._id),
          { point: point },
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    });
  VotePost.remove(
    { user: ObjectId(req.id), post: ObjectId(req.body.post) },
    (err) => {
      if (err) return handleError(err);
    }
  );
});

module.exports = controller;
