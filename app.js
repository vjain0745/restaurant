const express = require("express");
const app = express();
const mongoose =require("mongoose");
const bodyParser = require("body-parser");

const Router = require("express");
const connectdb = require("./db");
const PORT = process.env.PORT || 3000



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


var routes = require("./routes/index");
app.use('/', routes);

connectdb();


app.listen(PORT ,()=>{
console.log("running gooddd....");
});
