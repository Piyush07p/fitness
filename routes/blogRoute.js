const express=require('express')
const blogrouter=express.Router();

const {createBlog,approveBlog,deleteBlog,openFullblog} =require('../controllers/blogController')

blogrouter.post('/createBlog',createBlog);

blogrouter.post('/approve/:id',approveBlog)

blogrouter.post('/delete/:id',deleteBlog)

blogrouter.get('/posts/:id',openFullblog)


module.exports=blogrouter