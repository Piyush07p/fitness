const userModel=require('../models/userModel')
const bcrypt=require('bcryptjs')

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
        res.render("signup",{message:"Something  bad happen!!"})
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
        req.session.user_id=userData._id;
        console.log(req.session);
        req.session.message=userData.name
        req.session.isAdmin=userData.is_admin
        res.redirect('/askquery');
    }
}

module.exports={
    handleUserSignup,
    handleUserLogin
}