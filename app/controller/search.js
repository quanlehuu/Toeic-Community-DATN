const express = require("express");
const TagPost = require("../model/TagPost");
const Tag = require("../model/Tag");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const route = express.Router();

route.route("/:keyword").get(
    async (req, res) => {
        
        const tagPost = await TagPost.find({ 'keyword': req.params.keyword })
            .lean()
            .populate({ 
                path: 'post',
                populate: {
                    path: 'ofUser',
                    select: 'name img username',
                    model: 'User'
                } 
            })
            .exec((err, tagPost) => {
                if (err) console.log(err);
                else {
                    let i = 0;
                    for (i = 0; i<tagPost.length; i++) {
                        if (req.id == tagPost[i].post.ofUser._id) {
                            tagPost[i].post.ofCurUser = true;
                        }
                    }
                    res.json({tagPost: tagPost});
                }
            }
        );
        try {
            const tag = await Tag.findOne({'name': req.params.keyword });
            if(!tag) {
                let newTag = {
                    name : req.params.keyword,
                    times: 1
                }
                newTag = new Tag(newTag);
                newTag.save(e => {
                    console.log(e);
                });
            }
            else {
                tag.times ++;
                const test = await Tag.findOneAndUpdate({'name' : tag.name}, {times : tag.times});
                
            }
        }
        catch(e) {
            console.log("Error when find tag and update times" + e);
        }
    }
);

module.exports = route;