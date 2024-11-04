const express = require("express");
const app = express();

const token =require("./midlware/Token")
const validation =require("./midlware/Validation");
const Token = require("./midlware/Token");

// -----------------first way :- so you can do for navigate any pages using this method
// const path = require("path")

// app.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname, "views" , "index.html") )
// })

// app.get("/contact", (req,res)=>{
//     res.sendFile(path.join(__dirname,"views","contact.html"))
// })
// // this error condition section
// app.get("*", (req,res)=>{
//     res.status(404)
//     res.send("<h1>404<h1>")
// })

// --------------Second way :- this are a we will use  application level middleware (use)
// this can  access any pages
// app.use(express.static("views"))

// error method (optional)
//     app.get("*", (req,res)=>{
//         res.status(404)
//         res.send("<h1>404<h1>")
//     })

// ------------------------------------------------custom midleware--------------------

// middleware :- this is a token process , when ever you need see your profile section that time check are you already login or not if i loged that time compare Token
const middleware = [Token, validation]

app.get("/profile",middleware, (req, res) => {
  console.log("User Logged");
  res.send("<h1>Success<h1>");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT);
