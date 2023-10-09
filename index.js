const exp = require('constants')
const express= require('express')
const app=express()
// const fetch=require('node-fetch')
const path=require('path')

// const User =require('./config.js')
// app.use(express.json())

app.use(express.static('css'))
app.use(express.static('assets'))
app.use(express.static('js'))

app.set("view engine","html")
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get('/chat',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/chat.html'))
})

app.get('/blogs',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/blogs.html'))
})

app.get('/task',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/task.html'))
})

app.get('/sampark',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/sampark.html'))
})

app.get('/task1',(req,res)=>{
    res.sendFile(path.join(__dirname+'/taskhtml/task1.html'))
})

app.get('/diet',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/diet.html'))
})




// const options={
//     headers:{
//         'X-Api-Key': 'nW6szsf6eHRliyCa7LOI1Q==ORR1RlTglaixsr4t'
//     }
// }

// app.get('/api/data',(req,res)=>{
//     fetch('https://api.api-ninjas.com/v1/nutrition?query=egg',options)
//     .then((resp)=>resp.json())
//     .then((data)=>{
//        res.send(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })



app.listen(5500,()=>{
    console.log("server running")
})