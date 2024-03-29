require('dotenv').config()
const express= require('express')
const path=require('path')
const cors=require('cors')
const {connectDb}=require('./db/connectdb')

const app=express();
const config=require('./config/config.js')

const session=require('express-session');
app.use(session({secret:config.secret_key}))

const auth=require('./middleware/auth.js')


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
    res.render('index',{name:req.session.message})
})

app.get('/chat',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','chat.ejs'))
    res.render('chat')
})

const blogModel=require('./models/blogmodel.js')
app.get('/blogs',async (req,res)=>{
    // res.sendFile(path.join(__dirname,'views','blogs.ejs'))
    const blogData=await blogModel.find()
    const filteredData=blogData.filter((elem)=>elem.isVerified===true)
    res.render('blogs',{
        message:req.session.message,
        data:filteredData

    })
})

app.get('/createBlog',(req,res)=>{
    res.render('createBlog')
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