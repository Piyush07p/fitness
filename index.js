require('dotenv').config()
const express= require('express')
const path=require('path')
const cors=require('cors')
const {connectDb}=require('./db/connectdb')
const jwt=require('jsonwebtoken')

const app=express();
const config=require('./config/config.js')

const session=require('express-session');
app.use(session({secret:config.secret_key}))

const auth=require('./middleware/auth.js')

//--------------(setting cookie-parser)---------------

const cookieParser = require('cookie-parser');

app.use(cookieParser());


// getting all routes used in our project

const router=require('./routes/Queryroute.js')
const authrouter=require('./routes/userAuth.js')
const adminrouter=require('./routes/adminRoute.js')
const controuter=require('./routes/contactRoute.js')
const blogrouter=require('./routes/blogRoute.js')

//*****************( )*********************


// ***********(chatgpt-integration)***********


//all middleware used

app.use(express.static(path.join(__dirname,'public')))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())

//**************************/

app.set("view engine","ejs")

app.get('/',(req,res)=>{
     if(req.cookies.jwt_token==""){
        console.log("homepage")
        return res.render('index',{name:""})
     }

    let userInfo='';
    if(req.cookies.jwt_token){
        userInfo=jwt.verify(req.cookies.jwt_token,process.env.JWT_SECRET)
    }
  
     console.log("home-->",userInfo)
     
    res.render('index',{name:userInfo.name})
})

app.get('/chat',(req,res)=>{
    res.render('chat',{user:""})
})

const blogModel=require('./models/blogmodel.js')
app.get('/blogs',async (req,res)=>{
    const blogData=await blogModel.find()
    const filteredData=blogData.filter((elem)=>elem.isVerified===true)
    let userInfo=''
    if(req.cookies.jwt_token){
        userInfo=jwt.verify(req.cookies.jwt_token,process.env.JWT_SECRET)
    }
    res.render('blogs',{
        userName:userInfo.name,
        data:filteredData

    })
})

app.get('/createBlog',auth.isLogin,(req,res)=>{
    let  userInfo=jwt.verify(req.cookies.jwt_token,process.env.JWT_SECRET)
    res.render('createBlog',{
        userName:userInfo.name
    })
})

app.get('/task',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','task.ejs'))
    res.render('task')
})


app.get('/task1',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','task1.ejs'))
    res.render('task1')
})

app.get('/diet',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','diet.ejs'))
    res.render('diet')
})
// app.get('/posts',(req,res)=>{
//     // res.sendFile(path.join(__dirname,'views','diet.ejs'))
//     res.render('post')
// })


// routes for login signup
// app.get('/userAuth/signup',(req,res)=>{
//     res.render('signup')
// })

// app.get('/userAuth/login',(req,res)=>{
//     res.render('login')
// })



//all routes
app.use('/askquery',router)
app.use('/userAuth',authrouter)
app.use('/admin',adminrouter)
app.use('/contact',controuter)
app.use('/blogpage',blogrouter)
//database configuration
const db_url=process.env.MONGO_URL
connectDb(db_url)


app.listen(process.env.PORT,()=>{
    console.log(`server running at port ${process.env.PORT}` )
})