
const userModel=require('../models/userModel')

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
        const result=await userModel.find({is_admin:0})
        const adminData=await userModel.find({is_admin:1})
        if(req.session.admin_id){
            res.render("admindashboard",{userData:result,adminName:"You are logged in as admin"});
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
        const passw=req.body.password;
        const adminData=await userModel.findOne({email:email,password:passw});
        if(adminData){
            if(adminData.is_admin==1){
                req.session.admin_id=adminData._id;
                console.log(req.session.admin_id)
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