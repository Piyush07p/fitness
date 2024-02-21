const blogModel=require('../models/blogmodel')
const moment=require('moment')
async function createBlog(req,res){
    try {
        const resp=await blogModel.create({
            title:req.body.title,
            author:req.body.author,
            blogData:req.body.blogData,
            createdTime:moment().toString()
        })
        res.redirect('/blogs');
        // res.json({
        //     msg:"successfully created",
        //     data:resp
        // })
    } catch (error) {
        console.log(error)
    }
}

async function approveBlog(req,res){
        try {
            const resp=await blogModel.findByIdAndUpdate(req.params.id,{
                isVerified:true
            })
            res.redirect('/admin/dashboard')
        } catch (error) {
            console.log(error)
        }
}
async function deleteBlog(req,res){
        try {
            const resp=await blogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/dashboard')
        } catch (error) {
            console.log(error)
        }   
}

async function openFullblog(req,res){
    try {
        const resp=await blogModel.findById(req.params.id)
        console.log(resp)
        res.render('post',{fullBlog:resp})

    } catch (error) {
        console.log(error)
    }
}

module.exports={
    createBlog,
    approveBlog,
    deleteBlog,
    openFullblog
    
}