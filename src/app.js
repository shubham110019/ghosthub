const express = require('express');
const app = express();
const path = require('path');


const templatePath = path.join(__dirname,"../views")

app.set("view engine", "hbs");
app.set("views",templatePath)

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})


app.listen(2000,()=>{
    console.log(2000)
})
