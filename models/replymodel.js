const mongoose=require('mongoose')

const Schema2=new mongoose.Schema({
    queryId:{
        type:String
    },
    userName:{
        type:String
    },
    reply:{
        type:String,
        required:true
    },
    like:{
        type:Number,
        default:0

    },
    dislike:{
        type:Number,
        default:0
    },
    currentTime:{
        type:String,
    }
})

const replyModel=mongoose.model("Replydata",Schema2);

module.exports=replyModel;