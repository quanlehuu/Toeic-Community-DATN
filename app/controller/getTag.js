const express = require("express");
const Tag = require("../model/Tag");

const route = express.Router();

route.route("/").get(
    async (req,res) => {
        console.log("Hi");
        try {
            const tags =  await Tag.find({})
                                    .lean()
                                    .sort({times: -1})
                                    .limit(10);
            if(tags) {
                res.json({tags, 'success': true});
            }
            else
                res.json({"success" : false});
       
        }
        catch (e) {
            res.json({"success": false});      
        }
    }
);

module.exports = route;