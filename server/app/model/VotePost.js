var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var VotePost = new Schema({
    user: {
    	type: Schema.Types.ObjectId,
    	ref: 'User',
    	require: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        require: true
    },
    isVoteUp: Boolean 
});

module.exports = mongoose.model('VotePost', VotePost);