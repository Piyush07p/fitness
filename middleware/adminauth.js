const jwt=require('jsonwebtoken')

const isAdminLogin=async (req,res,next)=>{
    try {
        if(req.cookies?.jwt_token==""){
            console.log("login first");
            return res.redirect('/admin')
        }
    
        jwt.verify(req.cookies?.jwt_token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                console.log("Token expired");
                console.log(err)
                return res.redirect('/admin')
            }
            // req.currentUser=decode;
            // console.log(req.currentUser)
            if(decode.isAdmin==0){
                return res.redirect('/admin')
            }
            next();
            
        })

    } catch (error) {
        console.log(error)
    }
}
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
    isadminLogout,
    isAdminLogin
}