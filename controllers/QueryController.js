const session = require('express-session');
const dataModel=require('../models/dbmodel.js')
const replyModel=require('../models/replymodel.js')
const moment=require('moment')

const openAi=require('openai')
const openai=new openAi({
    apiKey:process.env.API_KEY
})

class ControllerClass{

    static createQuery=async (req,res)=>{
      try{
        console.log(req.body);
        const data=new dataModel({
            name:req.body.name,
            askQuery:req.body.textarea,
            currentTime:moment().format('MMMM Do YYYY, h:mm:ss a' ).toString()
        })
        await data.save()
        console.log("query added successfully")
        res.redirect("/askquery")
      }catch(err){
        console.log(err);
      }
    }

// for getting the data from the database

    static getQuery=async (req,res)=>{
        try{
            const result=await dataModel.find()
            console.log("sess-->",req.session.message)
            res.render("chat",{queryData:result,msg:req.session.message,isAdmin:req.session.isAdmin})
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

//--------------------(ai-chat)------------------
static askAiQuery=async(req,res)=>{
    try {
            const userPrompt=req.body.userPrompt
            console.log("prompt-->",userPrompt)
            const response=await openai.chat.completions.create({
                model:'gpt-3.5-turbo',
                messages:[{"role":"user","content":userPrompt}],
                max_tokens:150
        
             })
           res.render("askai",{aiReply:response.choices[0].message.content})
           console.log(response.choices[0].message.content)
    } catch (error) {
        console.log(error)
    }
}

static askai=async (req,res)=>{
        res.render("askai",{aiReply:"nothing to show"})
}


// -------------------(replies)--------------------------
    static replyData=async(req,res)=>{
        try{
            const data=new replyModel({
                queryId:req.body.qid,
                userName:req.body.name,
                reply:req.body.replies,
                currentTime:moment().format('MMMM Do YYYY, h:mm:ss a' ).toString()
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
                res.render("reply",{replyData:result,uname:req.session.message,isAdmin:req.session.isAdmin})
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

    static updateLike=async (req,res)=>{
        try{
            const data=await replyModel.findById(req.params.id);

            data.like=data.like+1
            const result=await replyModel.findByIdAndUpdate(req.params.id,data)

            res.redirect(`/askquery/reply/${data.queryId}`)
        }catch(err){
            console.log(err)
        }
    }

    static updateDislike=async (req,res)=>{
        try{
            const data=await replyModel.findById(req.params.id);
            
            data.dislike=data.dislike+1
            const result=await replyModel.findByIdAndUpdate(req.params.id,data)

            res.redirect(`/askquery/reply/${data.queryId}`)
        }catch(err){
            console.log(err)
        }
    }

}

module.exports=ControllerClass