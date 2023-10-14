const express=require('express');
const {handleUserSignup,handleUserLogin}=require('../controllers/userController')
const authrouter=express.Router();

authrouter.post('/',handleUserSignup)
authrouter.post('/login',handleUserLogin)




module.exports=authrouter;

