var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var VoteComment = new Schema({
    user: {
    	type: Schema.Types.ObjectId,
    	ref: 'User',
    	require: true
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        require: true
    },
    isVoteUp: Boolean 
});

module.exports = mongoose.model('VoteComment', VoteComment);