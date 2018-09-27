import express from "express";
import { join } from "path";
import open from "open";
import compression from "compression";

/* eslint-disable no-console */

//this file is for checking production build by running server from production build folder.
 
var port= 3000;
var app=express();
app.use(compression());
app.use(express.static("dist"));


app.get("/",function(req,res){
res.sendFile(join(__dirname,'../dist/index.html'));
});

app.listen(port,function(err){
  if(err)
  console.log("error is " + err);
  else
  console.log("server Ready");
  
  //Open has a vulnerability so dont keep this line once your dev is completed.
  open("http://localhost:"+port);
});

