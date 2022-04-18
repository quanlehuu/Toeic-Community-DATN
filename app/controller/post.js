const express = require("express");
const Post = require("../model/post");
const TagPost = require("../model/TagPost");
const Following = require("../model/Following");
const Notification = require("../model/Notification");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const controller = express.Router();

controller.route("/getAll/:num").get((req, res) => {
  Post.find({})
    .lean()
    .populate("ofUser", "name img username")
    .sort({ time: -1 })
    .skip(req.params.num * 10)
    .limit(10)
    .exec((err, post) => {
      if (err) console.log(err);
      else {
        let i = 0;
        for (i = 0; i < post.length; i++) {
          if (req.id == post[i].ofUser._id) {
            post[i].ofCurUser = true;
          }
        }
        res.json({ post: post });
      }
    });
});

controller.route("/getOfUser/:id").get((req, res) => {
  Post.find({ ofUser: req.params.id })
    .lean()
    .populate("ofUser", "name img username")
    .exec((err, post) => {
      if (err) console.log(err);
      else {
        let i = 0;
        for (i = 0; i < post.length; i++) {
          post[i].ofCurUser = true;
        }
        res.json({ post: post });
      }
    });
});

controller.route("/").post(async (req, res) => {
  const post = new Post({
    ...req.body.post,
    ofUser: ObjectId(req.id),
  });
  await post.save((err) => {
    if (err) console.log(err);
  });
  const tags = req.body.post.tag;
  for (let i = 0; i < tags.length; i++) {
    const tag = new TagPost({
      post: post._id,
      keyword: tags[i],
    });
    await tag.save((err) => {
      if (err) console.log(err);
    });
  }
  await Following.find({ followee: Object(req.id) }).exec((err, followings) => {
    for (let i = 0; i < followings.length; i++) {
      const noti = new Notification({
        time: post.time,
        follower: ObjectId(followings[i].follower),
        followee: ObjectId(req.id),
        posted: true,
        seen: false,
      });
      noti.save((err) => {
        if (err) console.log(err);
      });
    }
  });

  res.json({ success: true });
});

controller.route("/:id").delete(async (req, res) => {
  await Post.findByIdAndRemove(ObjectId(req.params.id), (err) => {
    if (err) console.log(err);
  });
  await TagPost.findOneAndRemove({ post: ObjectId(req.params.id) }, (err) => {
    if (err) console.log(err);
  });
  await Save.findOneAndRemove({ post: ObjectId(req.params.id) }, (err) => {
    if (err) console.log(err);
  });
  await VotePost.findOneAndRemove({ post: ObjectId(req.params.id) }, (err) => {
    if (err) console.log(err);
  });
  await Comment.findOne(
    { ofPost: ObjectId(req.params.id) },
    async (err, comment) => {
      if (err) console.log(err);
      else {
        await VoteComment.findOneAndRemove(
          { comment: ObjectId(comment._id) },
          (err) => {
            if (err) console.log(err);
          }
        );
        await comment.remove();
      }
    }
  );
  res.json({ success: true });
});

module.exports = controller;
