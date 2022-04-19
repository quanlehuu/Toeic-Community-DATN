const express = require("express");
const VoteComment = require("../model/VoteComment");
const User = require("../model/user");
const Comment = require("../model/Comment");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const controller = express.Router();

controller.route("/:commentId").get((req, res) => {
  VoteComment.findOne({
    user: ObjectId(req.id),
    comment: ObjectId(req.params.commentId),
  }).exec((error, data) => {
    if (!data) res.json({ voted: 0 });
    else if (data.isVoteUp) res.json({ voted: 1 });
    else res.json({ voted: -1 });
  });
});

controller.route("/").post(async (req, res) => {
  await Comment.findById(ObjectId(req.body.comment))
    .populate("ofUser", "point")
    .exec((err, comment) => {
      if (err) console.log(err);
      else {
        let point = req.body.isVoteUp
          ? comment.ofUser.point + 1
          : comment.ofUser.point - 1;
        User.findByIdAndUpdate(
          ObjectId(comment.ofUser._id),
          { point: point },
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    });
  const voteComment = new VoteComment({
    user: ObjectId(req.id),
    comment: ObjectId(req.body.comment),
    isVoteUp: req.body.isVoteUp,
  });
  voteComment.save();
});

controller.route("/").put(async (req, res) => {
  await Comment.findById(ObjectId(req.body.comment))
    .populate("ofUser", "point")
    .exec((err, comment) => {
      if (err) console.log(err);
      else {
        let point = req.body.isVoteUp
          ? comment.ofUser.point + 2
          : comment.ofUser.point - 2;
        User.findByIdAndUpdate(
          ObjectId(comment.ofUser._id),
          { point: point },
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    });

  VoteComment.findOne({
    user: ObjectId(req.id),
    comment: ObjectId(req.body.comment),
  }).exec((error, voteComment) => {
    voteComment.isVoteUp = req.body.isVoteUp;
    voteComment.save();
  });
});

controller.route("/").delete(async (req, res) => {
  await Comment.findById(ObjectId(req.body.comment))
    .populate("ofUser", "point")
    .exec((err, comment) => {
      if (err) console.log(err);
      else {
        let point = req.body.isVoteUp
          ? comment.ofUser.point - 1
          : comment.ofUser.point + 1;
        User.findByIdAndUpdate(
          ObjectId(comment.ofUser._id),
          { point: point },
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    });
  VoteComment.remove(
    { user: ObjectId(req.id), comment: ObjectId(req.body.comment) },
    (err) => {
      if (err) return handleError(err);
    }
  );
});

module.exports = controller;
