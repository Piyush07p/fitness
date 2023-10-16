const express=require('express');
const {handleUserSignup,handleUserLogin}=require('../controllers/userController')
const authrouter=express.Router();

authrouter.post('/signup',handleUserSignup)
authrouter.post('/login',handleUserLogin)




module.exports=authrouter;

