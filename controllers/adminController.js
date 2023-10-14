
const userModel=require('../models/userModel')

async function adminLogin(req,res){
    try{
        res.render("adminlogin");
    }catch(err){
        console.log(err)
    }
}

async function adminDashboard(req,res){
    try{
        res.render("admindashboard");
    }catch(err){
        console.log(err)
    }
}

async function handleAdminLogin(req,res){
    try {
        const email=req.body.email;
        const passw=req.body.password;
        const adminData=await userModel.findOne({email:email,password:passw});
        console.log(adminData)
        if(adminData){
            if(adminData.email=="admin00@gmail.com"&&adminData.password=="adminn"){
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

module.exports={
    adminLogin,
    adminDashboard,
    handleAdminLogin
}