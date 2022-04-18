var mongoose = require("mongoose");
const User = require("../model/user");

//Define a schema
var Schema = mongoose.Schema;

var Post = new Schema({
  time: {
    type: Date,
    default: Date.now,
  },
  ask: Boolean,
  question: {
    type: String,
    require: true,
  },
  optionA: {
    type: String,
    require: true,
  },
  optionB: {
    type: String,
    require: true,
  },
  optionC: {
    type: String,
    require: true,
  },
  optionD: {
    type: String,
    require: true,
  },
  solution: String,
  explanation: String,
  tag: [String],
  ofUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

module.exports = mongoose.model("Post", Post);
