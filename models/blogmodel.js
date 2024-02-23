const mongoose=require('mongoose')

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    blogData:{
        type:String,
        required:true
    },
    blogImg:{
        type:String,
        default:"blogImg-1708709987618.png"
    },
    createdTime:{
        type:String,
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

const blogModel=mongoose.model("blogData",blogSchema)

module.exports=blogModel