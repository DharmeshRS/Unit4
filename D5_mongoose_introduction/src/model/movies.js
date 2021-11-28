const mongoose=require('mongoose')
const validator=require('validator')

const movieSchema=mongoose.Schema({
    movie_name:String,
    movie_genre:String,
    production_year:Number,
    budget:Number
})


const Movie=new mongoose.model("Movie",movieSchema)

module.exports=Movie