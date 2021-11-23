const express=require('express');

const app=express();

const jsondata=require("./books.json")
const port=3000;

// 1.this return all the users
app.get('/',(req,res)=>{
    console.log("This Is Homepage")
    res.send(jsondata)
})
app.get('/:id',(req,res)=>{
    res.send(jsondata[req.params.id])
   
})


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// 2.pass an user to it and it will append it to the end of the users and return it
// app.post('/add', urlencodedParser, function (req, res) {  
//     // Prepare output in JSON format  
//     console.log(req.body)
//     // response = {  
//     //     id:req.body.id,
//     //     first_name:req.body.book_name,  
//     //     author:req.body.author,
//     //     price:req.body.price  
//     // };  
//     // console.log(response);  
//     // res.end(JSON.stringify(response));  
//  })  
app.post('/add', function (req, res, next) {
    console.log(req.body)
    response = {  
                id:req.body.id,
                first_name:req.body.book_name,  
                author:req.body.author,
                price:req.body.price  
            }; 
             
    res.json(req.body)
  })

app.put('/', function (req, res) {
    res.send('PUT request to homepage')
})  

app.delete('/:id',(req,res)=>{
    res.send(jsondata[id]==req.params.id)
   
})


app.listen(port,()=>{
    console.log(`Listening On the Port ${port}`)
})