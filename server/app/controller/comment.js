const express = require("express");
const Comment = require("../model/Comment");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const controller = express.Router();

controller.route("/get/:postId").get(
    (req, res) => {
        Comment.find({"ofPost": ObjectId(req.params.postId)})
            .populate('ofUser', 'name img username')
            .sort({time: -1})
            .exec((err, comment) => {
                if (err) console.log(err);
                else res.json({comment: comment});
            }
        );
    }
);

controller.route("/check/:postId").get(
    (req, res) => {
        Comment.findOne({ 'ofUser': ObjectId(req.id), 'ofPost': ObjectId(req.params.postId) })
            .exec((err, data)=>{
                if (err) console.log(err); 
                if (data) res.json({commented: true});
                else res.json({commented: false});
            });
    }
);

controller.route("/").post(
    (req, res) => {
        const comment = new Comment({
            time: new Date(),
            content: req.body.content,
            ofUser: ObjectId(req.id),
            ofPost: ObjectId(req.body.ofPost),
            nameUser: req.name
        });
        comment.save();
    }
);

module.exports = controller;