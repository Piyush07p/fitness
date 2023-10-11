const dataModel=require('../models/dbmodel.js')


class ControllerClass{

    static createQuery=async (req,res)=>{
      try{
        console.log(req.body);
        const data=new dataModel({
            key:Date.now(),
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
            res.render("chat",{queryData:result})
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
}

module.exports=ControllerClass