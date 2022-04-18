var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TagPost = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        require: true
    },
    keyword: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('TagPost', TagPost);