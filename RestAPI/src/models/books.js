const mongoose=require('mongoose')
const validator=require('validator')

const BookSchema=new mongoose.Schema({
    
    author:String,
    book_name:String,
    pages:Number,
    established_year:Number


})

const Book=new mongoose.model('Book',BookSchema)

module.exports=Book