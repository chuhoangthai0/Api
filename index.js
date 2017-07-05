var mongoose = require('mongoose');
var express = require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
var winston = require("winston");
var bodyParser = require('body-parser');
app.use(bodyParser.json({ extended: false }));
var showbd= require("./routes/ShowDB");
var insertdb= require("./routes/insertDb");
var water= require("./routes/Water");

app.get('/api/data', showbd.findall);
app.post('/api/plan', insertdb.insertDB);
app.put('/api/water',water.Water);

app.listen(3000);
