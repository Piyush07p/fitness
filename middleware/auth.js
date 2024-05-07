const replyModel=require('../models/replymodel')
const jwt=require('jsonwebtoken')

const isLogin=async (req,res,next)=>{
    try{
        
        if(req.cookies?.jwt_token==""){
            console.log("login first");
            return res.redirect('/userAuth/login')
        }
    
        jwt.verify(req.cookies?.jwt_token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                console.log("Token expired");
                console.log(err)
                return res.redirect('/userAuth/login')
            }
            req.currentUser=decode;
            console.log(req.currentUser)
            next();
            // return res.redirect('/askquery')
            
        })
        
    }
    catch(err){
        console.log(err.message);
    }
}
//-------------(middleware to check if user is logged in to like the comment)--------------

// const isLoginForLike= async (req,res,next)=>{
//     try{
//         const data=await replyModel.findById(req.params.id);
//         if(req.session.user_id){
//             res.redirect(`/askquery/reply/${data.queryId}`)
//             next();
//         }
//         else{
//             res.redirect('/userAuth/login');
//         }
        
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }

const isLogout=async(req,res,next)=>{
    try{
        if(req.cookies.jwt_token){
            return res.redirect('/');
        }

        next();
    }
    catch(err){
        console.log(err.message);
    }
}



module.exports={
    isLogin,
    isLogout,
}