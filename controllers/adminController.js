
const userModel=require('../models/userModel')
const blogModel=require('../models/blogmodel')
const contactModel=require('../models/contactModel')
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')

async function adminLogin(req,res){
    try{
       if(req.session.admin_id){
          res.redirect('/admin/dashboard')
       }else{
         res.render("adminlogin");
       }
    }catch(err){
        console.log(err)
    }
}

async function adminDashboard(req,res){
    try{
        const alluser=await userModel.find({is_admin:0})
        const blogs=await blogModel.find()
        const contactMsg=await contactModel.find()
        const verifiedBlogs=blogs.filter((e)=>e.isVerified===true)
        const adminData=await userModel.find({is_admin:1})
        // let validToken=jwt.verify(req.cookies.jwt_token,process.env.JWT_SECRET)

        if(true){
            res.render("admindashboard",{
                userData:alluser,
                blogData:blogs,
                contactMsg:contactMsg,
                verifiedBlogs:verifiedBlogs,
                adminName:"You are logged in as admin"
            });
        }else{
            res.redirect('/admin')
        }
    }catch(err){
        console.log(err)
    }
}

async function handleAdminLogin(req,res){
    try {
        const email=req.body.email;
        const password=req.body.password;
        const adminData=await userModel.findOne({email:email});
        const isadminMatch=await bcrypt.compare(password,adminData.password);
        if(isadminMatch){
            if(adminData.is_admin==1){
                let token=jwt.sign({
                    user_id:adminData._id,
                    name:adminData.name,
                    isAdmin:adminData.is_admin
                },process.env.JWT_SECRET)
              
        
                res.cookie('jwt_token',token)
                console.log(token)
                // req.session.admin_id=adminData._id;

                // req.session.message=adminData.name;
                // req.session.isAdmin=adminData.is_admin
    
                console.log("admin login success")
                res.redirect('/admin/dashboard');
            }else{
                res.render('adminlogin',{message:"not an admin"})
            }
        }
        else{
            res.render("adminlogin",{message:"incorrect email or password"})
        }
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(req,res){
    try{
        const result=await userModel.findByIdAndDelete(req.params.id)
        res.redirect('/admin/dashboard')
    }catch(err){
        console.log(err)
    }
}

module.exports={
    adminLogin,
    adminDashboard,
    handleAdminLogin,
    deleteUser
}