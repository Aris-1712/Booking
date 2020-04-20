const express=require("express")
const route=express.Router()
const Location=require('../Models/Location')
const Slot=require('../Models/Slots')
const Purpose=require('../Models/Purpose')
const Turfs=require('../Models/Turfs')
const joi=require("joi")
// ------Location Master---------
route.post('/new',async(req,resp)=>{
    try{
let valid=await locationValidate(req.body)
if(valid){
    let uniqueCheck=await Location.find({Name:req.body.Name})
    if(uniqueCheck.length===0){
        let location=new Location(req.body)
        // console.log(req.body)
        let res=await location.save()
        resp.send(res)
    }
    else{
        resp.status(404).send("Invalid input")
    }

}
else{
    resp.status(404).send("Invalid input")
}
}
catch(err){
    resp.status(404).send(err)
}
})


route.get('/all',async(req,resp)=>{
    try{
    let data=await Location.find()
    resp.send(data)
}
catch(err){
    resp.status(404).send("Error or No data")
}
})

route.post('/edit',async(req,resp)=>{
let res=await Location.findById(req.body._id)
if(res){
    res.Name=req.body.Name
    let result=await res.save()
    resp.send(result)
}
else{
    resp.status(404).send("Invalid Id")
}
})

route.post('/del',async(req,resp)=>{
    // console.log(req.body)
    let res=await Location.findByIdAndDelete(req.body._id)
    if(res){
        resp.send(res)
    }
    else{
        resp.status(404).send("Invalid Id")
    }
    // console.log(res)
    
})

let locationValidate=async(obj)=>{
    const joiLocation={
        Name:joi.string().min(3).required()
    }
    let res=await joi.validate(obj,joiLocation)
    return res
}
// ---------------------------------------------------------------------------------------------------
// --------------------------------------SLOT Start-------------------------------------------------------------
route.post('/slot/new', async(req,resp)=>{
    try{
let valid=await slotValidate(req.body)
if(valid){
let unique=await Slot.find({Slot:req.body.Slot})
if(unique.length===0){
    let slot=new Slot(req.body)
    let saved=await slot.save()
    resp.send(saved)
}
else{
    resp.status(404).send("Slot already exists")
}
}
else{
    resp.status(404).send("Invalid Input")
}
}

catch(err){
   resp.status(404).send((err.details[0].message))
}
})

route.get("/slot/all",async(req,resp)=>{
    try{
        let res=await Slot.find()
        resp.send(res)

    }
    catch(Err){
resp.status(404).send("Network Error or No data found")
    }
})

route.post("/slot/del",async(req,resp)=>{
    try{
        console.log(req.body._id)
        let res=await Slot.findByIdAndDelete(req.body._id)
        if(res){
            resp.send("Slot Deleted")
        }
        else{
            resp.status(404).send("Not foundd or Network Error")
        }
    }
    catch(err){
        resp.status(404).send("Not foundd or Network Error")
    }
})

let slotValidate=async(obj)=>{
const joiSlot={
    Slot:joi.array().length(2).required()

}
let res=await joi.validate(obj,joiSlot)
return res
}
// ---------------------------------------------------------------------------------------------------
// --------------------------------------PURPOSE Start-------------------------------------------------------------

route.post('/purpose/new',async(req,resp)=>{
    try{
let valid=await purposeValidate(req.body)
if(valid){
    let uniqueCheck=await Purpose.find({Name:req.body.Name})
    if(uniqueCheck.length===0){
        let purpose=new Purpose(req.body)
        // console.log(req.body)
        let res=await purpose.save()
        resp.send(res)
    }
    else{
        resp.status(404).send("Invalid input")
    }

}
else{
    resp.status(404).send("Invalid input")
}
}
catch(err){
    resp.status(404).send(err)
}
})


route.get('/purpose/all',async(req,resp)=>{
    try{
    let data=await Purpose.find()
    resp.send(data)
}
catch(err){
    resp.status(404).send("Error or No data")
}
})

route.post('/purpose/edit',async(req,resp)=>{
let res=await Purpose.findById(req.body._id)
if(res){
    res.Name=req.body.Name
    let result=await res.save()
    resp.send(result)
}
else{
    resp.status(404).send("Invalid Id")
}
})

route.post('/purpose/del',async(req,resp)=>{
    // console.log(req.body)
    let res=await Purpose.findByIdAndDelete(req.body._id)
    if(res){
        resp.send(res)
    }
    else{
        resp.status(404).send("Invalid Id")
    }
    // console.log(res)
    
})

let purposeValidate=async(obj)=>{
    const joiPurpose={
        Name:joi.string().min(3).required()
    }
    let res=await joi.validate(obj,joiPurpose)
    return res
}

// ---------------------------------------------------------------------------------------------------
// --------------------------------------Turfs Start-------------------------------------------------------------

route.post('/turf/new',async (req,resp)=>{
    try{
    let res=await turfValidate(req.body)
    if(res){
        let check=await Turfs.find({Name:req.body.Name,Location:req.body.Location,Purpose:req.body.Purpose,daySlot:req.body.daySlot,imgList:req.body.imgList})
        if(check.length===0){
            let turf=new Turfs(req.body)
            let saving=await turf.save()
            resp.send(saving)

        }
        else{
            resp.status(404).send("Invalid Object")
        }


    }
    else{
        resp.status(404).send("Invalid Object")
    }
}catch(err){
    console.log(err)
    resp.status(404).send(err)
}

})


let turfValidate=async(obj)=>{
    let schema={
        Name:joi.required(),
        Location:joi.required(),
        Purpose:joi.required(),
        daySlot:joi.required(),
        imgList:joi.required()
    }
    let res= await joi.validate(obj,schema)
    return(res)
}























module.exports=route