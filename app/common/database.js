var mongoose = require("mongoose");

//Set up default mongoose connection
// var mongoDB = 'mongodb://ttcnpm10:ttcnpm10@ds261128.mlab.com:61128/toeic_community';
var mongoDB =
  "mongodb+srv://ttcnpm10:cVmDbZyCom9FA33r@toeic-community.ltiip.mongodb.net/toeic_community?retryWrites=true&w=majority";
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
