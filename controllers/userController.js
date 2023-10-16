const userModel=require('../models/userModel')
const bcrypt=require('bcryptjs')
async function handleUserSignup(req,res){
    const {name,email,password}=req.body;
    const hashedPassw=await bcrypt.hash(password,10);
    await userModel.create({
        name:name,
        email:email,
        password:hashedPassw,
        is_admin:0
    })
 
     res.redirect("/")
}

async function handleUserLogin(req,res){
    const {email,password}=req.body;

    const userEmail=await userModel.findOne({email:email})

    const isMatch=await bcrypt.compare(password,userEmail.password);

    console.log(isMatch)
    if(!isMatch){
        return res.render("login",{message:"invalid credentials"})
    }

     res.redirect("/")
}

module.exports={
    handleUserSignup,
    handleUserLogin
}