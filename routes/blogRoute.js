const express=require('express');
const blogrouter=express.Router();
const multer=require('multer');

const {createBlog,approveBlog,deleteBlog,openFullblog} =require('../controllers/blogController')

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"./public/uploads")
        },
        filename: function(req,file,cb){
            cb(null,`${file.fieldname}-${Date.now()}.jpg`)
        }
    })
}).single("blogImg")

blogrouter.post('/createBlog',upload,createBlog);

blogrouter.post('/approve/:id',approveBlog)

blogrouter.post('/delete/:id',deleteBlog)

blogrouter.get('/posts/:id',openFullblog)


module.exports=blogrouter