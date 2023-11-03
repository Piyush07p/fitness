const session = require('express-session');
const dataModel=require('../models/dbmodel.js')
const replyModel=require('../models/replymodel.js')




class ControllerClass{

    static createQuery=async (req,res)=>{
      try{
        console.log(req.body);
        const data=new dataModel({
            name:req.body.name,
            askQuery:req.body.textarea
        })
        await data.save()
        res.redirect("/askquery")
      }catch(err){
        console.log(err);
      }
    }

// for getting the data from the database

    static getQuery=async (req,res)=>{
        try{
            const result=await dataModel.find()
            console.log(req.session.message)
            res.render("chat",{queryData:result,msg:req.session.message})
        }catch(err){
            console.log(err)
        }
     
    }

    static editQuery=async(req,res)=>{
        try{
            const result=await dataModel.findById(req.params.id)
            console.log(result)
            res.render("edit",{result})
        }catch(err){
            console.log(err)
        }
    }
    
    static updateQuery=async (req,res)=>{
        try{
            const result=await dataModel.findByIdAndUpdate(req.params.id,req.body)

            console.log(result)
            console.log(req.body)
            
            res.redirect('/askquery')
        }catch(err){
            console.log(err)
        }
    }

    static delQuery= async(req,res)=>{
        try{
            const result=await dataModel.findByIdAndDelete(req.params.id)
            res.redirect('/askquery')
        }catch(err){
            console.log(err)
        }
    }

    static replyData=async(req,res)=>{
        try{
            const data=new replyModel({
                queryId:req.body.qid,
                userName:req.body.name,
                reply:req.body.replies
            })
            await data.save()
            res.redirect("/askquery")
          }catch(err){
            console.log(err);
          }
    }

    static getReply=async (req,res)=>{
        try{
            const result=await replyModel.find({queryId:req.params.id})
            console.log(result)
            if(result){
                res.render("reply",{replyData:result,uname:req.session.message})
            }else{
                res.render("reply",{message:"no replies present",uname:req.session.message})
            }
            
        }catch(err){
            console.log(err)
        }
     
    }

    static delReply= async(req,res)=>{
        try{
            const result=await replyModel.findByIdAndDelete(req.params.id)
            res.redirect('/askquery')
        }catch(err){
            console.log(err)
        }
    }

}

module.exports=ControllerClass