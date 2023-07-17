const express = require("express");
const cors = require("cors");
const sql = require("./module/db")
const port = 5000;

//creat service
const app = express();

//use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.send("<h1>This is a RESTful API for restaurant</h1>");
})

app.listen(port, ()=>{
    console.log("Server is running on http://localhost:"+ port);
})