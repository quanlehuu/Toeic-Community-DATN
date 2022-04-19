const express = require("express");
const Save = require("../model/Save");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const controller = express.Router();

controller.route("/").get(
    (req, res) => {
        Save.find({user: req.id})
            .lean()
            .populate({ 
                path: 'post',
                populate: {
                    path: 'ofUser',
                    select: 'name img username',
                    model: 'User'
                } 
            })
            .exec((err, savedPost) => {
                if (err) console.log(err);
                else {
                    let i = 0;
                    for (i = 0; i<savedPost.length; i++) {
                        if (req.id == savedPost[i].post.ofUser._id) {
                            savedPost[i].post.ofCurUser = true;
                        }
                    }
                    res.json({post: savedPost});   
                }
            }
        );
    }
);

controller.route("/:postId").get(
    (req, res) => {
        const save = Save.findOne({ 'user': ObjectId(req.id), 'post': ObjectId(req.params.postId) })
            .exec((error, data)=>{
                if (!data) res.json({saved: false});
                else res.json({saved: true});
            });
    }
);

controller.route("/").post(
    (req, res) => {
        const save = new Save({
            user: ObjectId(req.id),
            post: ObjectId(req.body.post)
        });
        save.save();
    }
);

controller.route("/").delete(
    (req, res) => {
        Save.remove({ 'user': ObjectId(req.id), 'post': ObjectId(req.body.post) }, (err) => {
            if (err) return handleError(err);
        });
    }
);

module.exports = controller;
