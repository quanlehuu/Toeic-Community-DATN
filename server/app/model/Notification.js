var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Notification = new Schema({
    time: {
    	type: Date,
    	default: Date.now
    },
    follower: {
    	type: Schema.Types.ObjectId,
        ref: 'User',
    	require: true
    },
    followee: {
    	type: Schema.Types.ObjectId,
        ref: 'User',
    	require: true
    },
    posted: {
        type: Boolean,
        default: false
    },
    seen: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Notification', Notification);