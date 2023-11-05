
const isadminLogout=async(req,res,next)=>{
    try{
        if(req.session.admin_id){
            console.log(req.session)
        }
        else{
            res.redirect('/admin');
        }
        next();
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports={
    isadminLogout
}