const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const Tag = new Schema({
    name: {
    	type: String,
        require: true
    },
    times: {
    	type: Number,
    	require: true
    }
});

module.exports = mongoose.model('Tag', Tag);