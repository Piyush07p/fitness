
const isLogin=async (req,res,next)=>{
    try{
        console.log(req.session)
        if(req.session.user_id){
            res.redirect('/askquery')
        }
        else{
            res.redirect('/userAuth/login');
        }
        next();
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
    isLogout
}