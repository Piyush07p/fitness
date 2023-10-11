const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    key:{
        type:Number,
    },
    askQuery:{
        type:String,
        required:true
    }
})

const dataModel=mongoose.model("Querydata",Schema);

module.exports=dataModel;

