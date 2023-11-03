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

app.get('/blogs',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','blogs.ejs'))
    res.render('blogs',{message:req.session.message})
})

app.get('/task',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','task.ejs'))
    res.render('task')
})

app.get('/sampark',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','sampark.ejs'))
    res.render('sampark')
})

app.get('/task1',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','task1.ejs'))
    res.render('task1')
})

app.get('/diet',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','diet.ejs'))
    res.render('diet')
})
app.get('/posts',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','diet.ejs'))
    res.render('post')
})


// routes for login signup
// app.get('/userAuth/signup',(req,res)=>{
//     res.render('signup')
// })

// app.get('/userAuth/login',(req,res)=>{
//     res.render('login')
// })

//routes for admin


app.use('/askquery',router)
app.use('/userAuth',authrouter)
app.use('/admin',adminrouter)

const db_url=process.env.MONGO_URL
connectDb(db_url)

app.listen(process.env.PORT,()=>{
    console.log(`server running at port ${process.env.PORT}` )
})