
const express=require('express')
const controuter=express.Router();
const {handelContact,delContactMsg} =require('../controllers/contController')


controuter.post('/',handelContact);
controuter.post('/delete/:id',delContactMsg);
controuter.get('/',(req,res)=>{
    res.render('sampark')
})


module.exports=controuter