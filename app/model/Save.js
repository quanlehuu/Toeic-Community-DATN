var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Save = new Schema({
    user: {
    	type: Schema.Types.ObjectId,
    	ref: 'User',
    	require: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        require: true
    }
});

module.exports = mongoose.model('Save', Save);