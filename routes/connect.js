var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/Thai');

db.on('error', console.error);
db.once('open', function () {
    // tạo  schemas and models ở đây.

});

// Tạo ra  a 'Smartjob' model using the movieSchema as the structure.
// Mongoose cũng sẽ tạo ra  1  collection smartjobs called 'Smarjob'  cho documentmowis được tạo này.
var treeSchema = new mongoose.Schema({
    id: Number, stypeTree: String, statusTree: String , timePlan:Date
});
//create model
 


module.exports = mongoose.model('data', treeSchema);
