const mongoose=require('mongoose')

const Schema2=new mongoose.Schema({
   
    reply:{
        type:String,
        required:true
    }
})

const replyModel=mongoose.model("Replydata",Schema2);

module.exports=replyModel;