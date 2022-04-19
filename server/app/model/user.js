var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var User = new Schema({
    username: {
    	type: String,
    	require: true,
        unique: true
    },
    password: {
    	type: String,
    	require: true,
        unique: true
    },
    name: {
        type: String,
    	require: true
    },
    birthday: {
        type: {
            birthday: Date,
            isPublic: {
                type: Boolean,
                default: false
            }
        }
    },
    phoneNumber: {
        type: {
            phoneNumber: String,
            isPublic: {
                type: Boolean,
                default: false
            }
        }
    },
    email: {
        type: {
            email: {
                type: String,
                unique: true
            },
            isPublic: {
                type: Boolean,
                default: false
            }
        }
    },
    img: {
        type: String,
        default: "/static/img/avatar_default.png",
    },
    point: {
        type: Number,
        default: 0
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

       
});

module.exports = mongoose.model('User', User );