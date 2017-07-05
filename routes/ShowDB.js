var mongoose = require('mongoose');
var express = require("express");
var app=express();
app.use(express.static("public"));
var router = express.Router();
var getdb = require('./connect');

exports.findall = function(req,res){
  getdb.find({},{id:1,statusTree:1},function(err,result){
    if (err) {
      winston.info("Khong lay duoc DB");
      res.status(401);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({status: 401 }));
    }else {
      //console.log(result);
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      //res.redirect("localhost:3000/sinhvien/api/list");
      res.send(JSON.stringify(result));

    }
  });
};
