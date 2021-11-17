let jsonData = require('./users.json');

const express=require("express")
const app=express()
// app.use(logger)
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Welcome to Home page")
    // console.log("Homepage get request");
})

app.get('/users/',(req,res)=>{
    res.send(jsonData)
})

app.post('/',(req,res)=>{
    //we need middleware to parse the request body
    res.status(201).json(req.body)
    console.log("request.body",req.body)
    console.log("Post request from server");
})

// function logger(req,res,next){
//         console.log("logging before")
//         next();
//         console.log("logging after")
// }
app.listen(1234,()=>{
    console.log("Listening on port 1234");
});

