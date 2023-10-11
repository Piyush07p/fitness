const express= require('express')
const path=require('path')
const cors=require('cors')
const {connectDb}=require('./db/connectdb')
const router=require('./routes/Queryroute.js')
const app=express();

//all middleware used

app.use(express.static('css'))
app.use(express.static('assets'))
app.use(express.static('js'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.set("view engine","ejs")

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/chat',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','chat.ejs'))
    res.render('chat')
})

app.get('/blogs',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views','blogs.ejs'))
    res.render('blogs')
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


const db_url="mongodb://127.0.0.1:27017"
connectDb(db_url)

app.use('/askquery',router)


app.listen(5500,()=>{
    console.log("server running")
})