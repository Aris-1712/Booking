const express=require('express')
const Master=require('./Routes/master')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
const mongoose=require('mongoose')
const db=async()=>{
    try{
let conn=await mongoose.connect("mongodb://localhost/Booking")
console.log("Connected to DB")
}
catch(err){
    console.log("DB not Operating")
}}

app.use('/master',Master)

app.listen(3001,()=>{console.log("connected on PORT 3001")})
db()

