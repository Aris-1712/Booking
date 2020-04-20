const joi=require('joi')
const mongoose=require('mongoose')

const purposeSchema=new mongoose.Schema({
    Name:String
})

const Purpose=mongoose.model("Purpose",purposeSchema)
module.exports=Purpose