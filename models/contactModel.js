const mongoose=require('mongoose')

const contSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
     },
     message:{
        type:String,
        required:true
     }
})
const contModel=mongoose.model('contactInfo',contSchema);
module.exports=contModel