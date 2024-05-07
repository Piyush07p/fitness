const userModel=require('../models/userModel')
const bcrypt=require('bcryptjs')
const fs=require('fs')
const jwt=require('jsonwebtoken')

async function handleUserSignup(req,res){
    const {name,email,password}=req.body;
    const hashedPassw=await bcrypt.hash(password,10);
    const signupStatus= await userModel.create({
        name:name,
        email:email,
        password:hashedPassw,
        is_admin:0
    })
 
    if(signupStatus){
        res.render("signup",{message:"you are registered successfully!!"})
    }else{
        res.render("signup",{message:"Something  bad happened!!"})
    }
}

async function handleUserLogin(req,res){
    const {email,password}=req.body;

    const userData=await userModel.findOne({email:email})

    const isMatch=await bcrypt.compare(password,userData.password);

    if(!isMatch){
         res.render("login",{message:"invalid credentials"})
    }
    else{
        let token=jwt.sign({
            user_id:userData._id,
            name:userData.name,
            isAdmin:userData.is_admin
        },process.env.JWT_SECRET)

        res.cookie('jwt_token',token)

        // req.session.user_id=userData._id;
        // console.log(req.session);
        // req.session.message=userData.name
        // req.session.isAdmin=userData.is_admin
        console.log(userData)
        req.user=userData
        res.redirect('/askquery');
    }
}

module.exports={
    handleUserSignup,
    handleUserLogin
}