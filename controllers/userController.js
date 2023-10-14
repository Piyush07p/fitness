const userModel=require('../models/userModel')

async function handleUserSignup(req,res){
    const {name,email,password}=req.body;
    await userModel.create({
        name:name,
        email:email,
        password:password
    })

     res.redirect("/")
}

async function handleUserLogin(req,res){
    const {email,password}=req.body;
    const user=await userModel.findOne({email:email,password:password});
    console.log(user)
    if(!user){
        return res.render("login",{error:"invalid credentials"})
    }

     res.redirect("/")
}

module.exports={
    handleUserSignup,
    handleUserLogin
}