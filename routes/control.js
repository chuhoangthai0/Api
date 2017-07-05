var mongoose = require('mongoose');
var express = require("express");
var app=express();
app.use(express.static("public"));
var router = express.Router();
var tree= require('./connect');



tree.find(function(err,result){
  if (err) {
  }else {
    for(var i=0;i<result.length;i++){
      //var _id=result[i]._id;
      var timePlan = new Date(result[i].timePlan);
      var timeWater= new Date(result[i].timeWater);
      var gettimeWater=timeWater.getTime().toString();
      console.log(gettimeWater);
      var timeNow = new Date();
      var time=timeNow-timePlan;
      console.log(time);
      var time1=timeNow-timeWater;
      //console.log(time1);
      if (gettimeWater == 'NaN' ) {
        if (time > 3600000){
          result[i].statusTree = "thieunuoc";
        }
      }
      else {
        if (time1 > 360000){
          result[i].statusTree = "lon";
        }
      }
      tree.findOneAndUpdate({_id:result[i]._id}, { statusTree:result[i].statusTree },function(err){
        if(err) console.log("err");
      //  console.log("done");
      });
    }
  }
});//mongoose.disconnect();
module.exports = router;
