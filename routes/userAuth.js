const express=require('express');
const {handleUserSignup,handleUserLogin}=require('../controllers/userController')
const authrouter=express.Router();

const auth=require('../middleware/auth')

authrouter.post('/signup',handleUserSignup)
authrouter.post('/login',handleUserLogin)

authrouter.get('/signup',auth.isLogout,(req,res)=>{
    res.render('signup',{message:""})
})

authrouter.get('/login',auth.isLogout,(req,res)=>{
    res.render('login')
})

authrouter.get('/logout',(req,res)=>{
    try{
        res.cookie('jwt_token', '');
        console.log("logout success")
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
})





module.exports=authrouter;

