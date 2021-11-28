const express=require('express')
require("./db/conn")
const Book=require("./models/books")
const app=express()
app.use(express.json())
const port=8000;


//read the all book data
app.get("/",async (req,res)=>{
    try{
        const bookdata=await Book.find()
        res.send(bookdata)
    }catch(err){
        res.send(err)
    }
})


//read single document
app.get("/books/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        console.log(_id)
        const record1 = await Book.findById(_id);
        res.send(record1)
    }catch(err){
        res.send(err)
    }
}) 


// app.post("/books",(req,res)=>{
//     const book=new Book(req.body)
//     // console.log(req.body)
//     book.save().then(()=>{
//         res.status(201).send("Data Saved Successfully")
//     })
//     .catch((err)=>{
//         res.status(400).send(err)
//     })
    
// })



//add single book into database
app.post("/books",async(req,res)=>{
    try{
        const book=new Book(req.body)
    
        const createUser=await book.save()
        res.status(201).send(createUser)
    }catch(err){
        res.status(400).send(err)
    }
    
})
//update perticular record
app.patch("/books/:id",async(req,res)=>{
    try{
        const update_record=await Book.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        res.send(update_record)
    }catch(err){
        res.send(err)
    }
})





//delete record

app.delete("/books/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const record1 = await Book.findByIdAndDelete(_id);
        res.send(record1)
    }catch(err){
        res.send(err)
    }
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})