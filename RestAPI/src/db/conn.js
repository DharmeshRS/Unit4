const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/bookDatabase')
.then(()=>{console.log("connection Established..")})
.catch((err)=>{console.log(err)})