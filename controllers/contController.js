const contactModel=require('../models/contactModel')


async function handelContact(req,res){
   try {
    const contactData=await contactModel.create({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    
   } catch (err) {
    console.log(err)
   }
}

module.exports={
    handelContact
}