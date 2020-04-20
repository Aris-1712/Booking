const mongoose=require('mongoose')

const turfsSchema=new mongoose.Schema({
    Name:String,
    Location:String,
    Purpose:String,
    daySlot:{},
    imgList:{}
})

const Turfs=mongoose.model("Turfs",turfsSchema)

module.exports=Turfs