const express = require("express");
const Notification = require("../model/Notification");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const controller = express.Router();

controller.route("/:num").get(
    (req, res) => {
        Notification.find({$or: [{followee: req.id}, {follower: req.id}]})
            .lean()
            .populate('follower', 'img username')
            .populate('followee', 'img username')
            .sort({time: -1}).skip(req.params.num*10).limit(10)
            .exec((err, noti) => {
                if (err) console.log(err);
                else {
                    res.json({noti: noti});
                }
            }
        );
    }
);

controller.route("/").get(
    (req, res) => {
        Notification.count({followee: req.id, seen: false})
            .exec((err, count) => {
                if (err) console.log(err);
                else {
                    res.json({count: count});
                }
            }
        );
    }
);

controller.route("/").post(
    (req, res) => {
        const notification = new Notification({
            time: new Date(),
            follower: ObjectId(req.id),
            followee: ObjectId(req.body.followeeId),
            seen: false
        });
        notification.save(err => {
            if (err) console.log(err);
        });
    }
);

controller.route("/:id").put(
    (req, res) => {
        Notification.findByIdAndUpdate(ObjectId(req.params.id), {'seen': req.body.seen}, err => {
            if (err) console.log(err);
        });
    }
);

controller.route("/").put(
    (req, res) => {
        Notification.updateMany({'followee': ObjectId(req.id)}, {'seen': true}, err => {
            if (err) console.log(err);
        });
    }
);



module.exports = controller;


