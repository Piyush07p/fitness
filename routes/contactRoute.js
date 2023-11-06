
const express=require('express')
const controuter=express.Router();
const {handelContact} =require('../controllers/contController')


controuter.post('/',handelContact);
controuter.get('/',(req,res)=>{
    res.render('sampark')
})


module.exports=controuter