const express=require('express');
require("./db/conn")
const Movie=require("./model/movies")

const port=6000;
const app=express()
app.use(express.json())


//add movie

app.post("/add_movie",async (req,res)=>{
    try{
        const movie=new Movie(req.body)
        const createMovie=await movie.save()
        res.status(201).send(createMovie)
    }catch(err){
        res.status(400).send(err)
    }
         
})


//show all movies
app.get("/",async(req,res)=>{
    try{
        const moviedata=await Movie.find()
        res.status(200).send(moviedata)
    }catch(err){
        res.status(400).send(err)
    }
})

//getting single movie
app.get("/:id",async(req,res)=>{
    try{
        const moviedata=await Movie.findById(req.params.id)
        res.status(200).send(moviedata)
    }catch(err){
        res.status(400).send(err)
    }
})


//update single document
app.patch("/update_movie/:id",async(req,res)=>{
    try{
        const update_record=await Movie.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        res.send(update_record)
    }catch(err){
        res.send(err)
    }
})

app.delete("/del_movie/:id",async (req,res)=>{
    try{
        const record1 = await Movie.findByIdAndDelete(req.params.id);
        res.send(record1)
    }catch(err){
        res.send(err)
    }  
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})