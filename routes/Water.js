var mongoose = require('mongoose');
var express = require("express");
var app=express();
app.use(express.static("public"));
var router = express.Router();
var up = require('./connect');

exports.Water = function (req,res){
  var id= req.body.id;
  var d= new Date();

  up.findOne({id:id},function(err,result){
    if(err) console.log("err");
    else{
      if (result.statusTree == "thieunuoc" ){
        up.findOneAndUpdate({_id:result._id}, { statusTree:"vua",timeWater:d },function(err){
          if(err) {
            winston.info("cannot Insert Data");
            res.status(401);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({status: 401 }));
          }
          else{
            res.status(200);
            res.setHeader('Content-Type', 'application/json');
            //res.redirect("localhost:3000/sinhvien/api/list");
            res.send(JSON.stringify({status: 200}));
          }
        });
      }
      else {
        winston.info("cannot Insert Data");
        //res.end();
        res.status(400);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({status: 400 }));
      }
    }
  });
};
