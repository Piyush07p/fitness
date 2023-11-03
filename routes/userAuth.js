const express=require('express');
const {handleUserSignup,handleUserLogin}=require('../controllers/userController')
const authrouter=express.Router();

const auth=require('../middleware/auth')

authrouter.post('/signup',handleUserSignup)
authrouter.post('/login',handleUserLogin)

authrouter.get('/signup',(req,res)=>{
    res.render('signup',{message:""})
})

authrouter.get('/login',(req,res)=>{
    res.render('login')
})

authrouter.get('/logout',(req,res)=>{
    try{
        req.session.destroy();
        console.log(req.session)
        console.log("logout success")
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
})





module.exports=authrouter;

