const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path=require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require('method-override');

app.engine('ejs', ejsMate);
app.use(methodOverride('_method')); 

async function main() {
    await mongoose.connect('mongodb://localhost:27017/hackathon');
}
main().then((res)=>{
    console.log("the connection made succesfully");
}).catch((err)=>{
    console.log("an error occured!");
});


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));//this line i written to parse the data coming from the req.body
app.use(express.static(path.join(__dirname,"public")));




app.get("/",(req,res)=>{
    res.render("index.ejs");
})



let port = 8080;

app.listen(port,()=>{
    console.log("the server is listening!");
});