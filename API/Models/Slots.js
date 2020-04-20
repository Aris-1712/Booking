const mongoose=require('mongoose')

const slotSchema=new mongoose.Schema({
    Slot:[]
})
const Slot=mongoose.model("Slot",slotSchema)

module.exports=Slot