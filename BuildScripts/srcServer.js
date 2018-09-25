import express from "express";
import { join } from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */
var port= 3000;
var app=express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noinfo:true,
  publicPath:config.output.publicPath
}));

app.get("/",function(req,res){
res.sendFile(join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
  if(err)
  console.log("error is " + err);
  else
  console.log("server Ready");
  
  //Open has a vulnerability so dont keep this line once your dev is completed.
  open("http://localhost:"+port);
});

