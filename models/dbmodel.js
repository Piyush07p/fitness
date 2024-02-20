const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    askQuery:{
        type:String,
        required:true
    },
    currentTime:{
        type:String,
        
    }
})

const dataModel=mongoose.model("Querydata",Schema);

module.exports=dataModel;

