const contactModel=require('../models/contactModel')


async function handelContact(req,res){
   try {
    const contactData=await contactModel.create({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    res.render("sampark")
   } catch (err) {
    console.log(err)
   }
}
async function delContactMsg(req,res){
      try {
        const resp=await contactModel.findByIdAndDelete(req.params.id)
        res.redirect('/admin/dashboard')
      } catch (error) {
         console.log(error)
      }
}
module.exports={
    handelContact,
    delContactMsg
}