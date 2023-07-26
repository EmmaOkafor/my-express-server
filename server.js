// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>");
});

app.get("/contact", function(req, res){
    res.send("Hola me @david.com");
});

app.get("/about", function(req, res){
    res.send("<h1> I am Mr David</h1>");
});

app.get("/hobbies", function(req, res){
    res.send("<h1> coding is my priority</h1>");
});

app.listen(3000, function(){
     console.log("Server started on port 3000");  
});