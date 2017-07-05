var mongoose = require('mongoose');
var express = require("express");
var app=express();
app.use(express.static("public"));
var router = express.Router();
var insert = require('./connect');
//var bodyParser = require('body-parser');
//app.use(bodyParser.json({ extended: false }))

exports.insertDB = function(req,res){
  insert.find(function(err,result){
    if (err) {
      winston.info("cannot get DB");
      res.status(401);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({status: 401 }));
    }
    else {
      var stypeTree=req.body.stypeTree;
      var statusTree=req.body.statusTree;
      var d  = Date();
      var id = req.body.id;
      var addtree = new insert({
        id:id, stypeTree:stypeTree, statusTree:statusTree, timePlan:d
      });
      addtree.save(function (err) {
          if(err){
            winston.info("cannot Insert Data");
            res.end();
            res.status(401);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({status: 401 }));
          } else{
            res.status(200);
            res.setHeader('Content-Type', 'application/json');
            //res.redirect("localhost:3000/sinhvien/api/list");
            res.send(JSON.stringify({status: 200}));
          }
      });
    }
  });
}
