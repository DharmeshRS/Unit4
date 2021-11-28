const express=require('express');

const app=express();

const jsondata=require("./books.json")
const port=3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/',(req,res)=>{
    console.log("This Is Homepage")
    res.send(jsondata)
})

app.get('/:id',(req,res)=>{
    // const newdata=jsondata.filter((book)=>book.book_name===req.params.book_name);
    // res.send(newdata)
    const newdata=jsondata.filter((book)=>book.id===req.params.id);
    res.send(newdata)
    // res.send(jsondata[req.params.id])
   
})




app.post('/book_add', function (req, res, next) {
    console.log(req.body)
    response = {  
                id:req.body.id,
                first_name:req.body.book_name,  
                author:req.body.author,
                price:req.body.price  
            }; 
             
    res.json(req.body)
    res.send("Book Data Added Successfully...")
  })

app.patch('/update/:id', function (req, res) {
    let a={};
    a.name="Dharmesh Sonar";
    const newUsers=jsondata.map((book)=>{
        if(req.params.id==book.id){
           if(req?.body?.book_name)book.book_name=req.body.book_name;
           if(req?.body?.author)book.author=req.body.author;
           if(req?.body?.price)book.price=req.body.price;
           res.send("Data Updated")
        }
        
    })
    

})  

app.delete('deletebook/:author',(req,res)=>{
    console.log(req.params.author)
        const newdata1=jsondata.filter((book)=>book.author!==req.params.author);
        res.send(newdata1)
   
})


app.listen(port,()=>{
    console.log(`Listening On the Port ${port}`)
})