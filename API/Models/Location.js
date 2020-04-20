const joi=require('joi')
const mongoose=require('mongoose')

const locationSchema=new mongoose.Schema({
    Name:String
})

const Location=mongoose.model("Location",locationSchema)
module.exports=Location