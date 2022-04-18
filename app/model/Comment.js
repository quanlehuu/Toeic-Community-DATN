var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Comment = new Schema({
    time: {
    	type: Date,
    	default: Date.now
    },
    content: {
    	type: String,
    	require: true
    },
    ofUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    ofPost: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        require: true
    }
});

module.exports = mongoose.model('Comment', Comment);