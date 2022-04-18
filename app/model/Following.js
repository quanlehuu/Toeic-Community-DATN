var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Following = new Schema({
    follower: {
    	type: Schema.Types.ObjectId,
        ref: 'User',
    	require: true
    },
    followee: {
    	type: Schema.Types.ObjectId,
        ref: 'User',
    	require: true
    }
});

module.exports = mongoose.model('Following', Following);