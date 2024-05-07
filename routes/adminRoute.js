const express=require('express')
const adminrouter=express()
const {adminLogin,adminDashboard,handleAdminLogin,deleteUser} =require('../controllers/adminController')
const auth=require('../middleware/auth.js')
const adminAuth=require('../middleware/adminauth.js')
// const adminauth=require('../middleware/adminauth.js')
adminrouter.use(express.json());
adminrouter.use(express.urlencoded({extended:false}))

adminrouter.set('view engine','ejs');
adminrouter.set('views','./views/admin')

adminrouter.get('/',auth.isLogout,adminLogin);
adminrouter.get('/dashboard',adminAuth.isAdminLogin,adminDashboard)

//-------------(route to check if the admin credentials are correct)----------------

adminrouter.post('/',handleAdminLogin)

adminrouter.post('/dashboard/delete/:id',deleteUser)



adminrouter.get('/logout',(req,res)=>{
    try{
        res.cookie('jwt_token','')
        console.log("admin logout success")
        res.redirect('/admin')
    }catch(err){
        console.log(err)
    }
})

adminrouter.get('*',function(req,res){
    res.redirect('/admin')
})

module.exports=adminrouter