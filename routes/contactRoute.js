
const express=require('express')
const controuter=express.Router();
const {handelContact,delContactMsg} =require('../controllers/contController')
const jwt=require('jsonwebtoken')

controuter.post('/',handelContact);
controuter.post('/delete/:id',delContactMsg);
controuter.get('/',(req,res)=>{
    let userInfo=''
    if(req.cookies.jwt_token){
        userInfo=jwt.verify(req.cookies.jwt_token,process.env.JWT_SECRET)
    }
    res.render('sampark',{
        userInfo:userInfo
    })
})


module.exports=controuter