//setup =============================================================
var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

//routes ============================================================
app.get("/", function(req,res){
   res.render("search"); 
});



app.get("/results",function(req,res){
    var moviename = req.query.movie;
    var url ="http://omdbapi.com/?s="+moviename+"&apikey=thewdb";
   request(url, function(error,response,body){
     if(!error && response.statusCode == 200){ 
         var data=JSON.parse(body)
         res.render("result",{data: data});
     }
     else 
        console.log(error);
   }); 
});

