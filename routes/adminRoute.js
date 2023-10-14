const express=require('express')
const adminrouter=express()
const {adminLogin,adminDashboard,handleAdminLogin} =require('../controllers/adminController')

adminrouter.use(express.json());
adminrouter.use(express.urlencoded({extended:false}))

adminrouter.set('view engine','ejs');
adminrouter.set('views','./views/admin')

adminrouter.get('/',adminLogin);
adminrouter.get('/dashboard',adminDashboard)

adminrouter.post('/',handleAdminLogin)
adminrouter.get('*',function(req,res){
    res.redirect('/admin')
})
module.exports=adminrouter