const replyModel=require('../models/replymodel')
const isLogin=async (req,res,next)=>{
    try{
        console.log(req.session)
        if(req.session.user_id){
            res.redirect('/askquery')
            next();
        }
        else{
            res.redirect('/userAuth/login');
        }
        
    }
    catch(err){
        console.log(err.message);
    }
}
//-------------(middleware to check if user is logged in to like the comment)--------------

const isLoginForLike= async (req,res,next)=>{
    try{
        const data=await replyModel.findById(req.params.id);
        if(req.session.user_id){
            res.redirect(`/askquery/reply/${data.queryId}`)
            next();
        }
        else{
            res.redirect('/userAuth/login');
        }
        
    }
    catch(err){
        console.log(err.message);
    }
}

const isLogout=async(req,res,next)=>{
    try{
        if(req.session.user_id){
            console.log(req.session)
        }
        else{
            res.redirect('/askquery');
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
    isLoginForLike
}