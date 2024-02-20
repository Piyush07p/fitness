const express=require('express')
const blogrouter=express.Router();

const {createBlog,approveBlog,deleteBlog,openFullblog,getopenFullblog} =require('../controllers/blogController')

blogrouter.post('/createBlog',createBlog);

blogrouter.post('/approve/:id',approveBlog)

blogrouter.post('/delete/:id',deleteBlog)

blogrouter.post('/posts/:id',openFullblog)

blogrouter.get('/posts/:id',getopenFullblog)

module.exports=blogrouter