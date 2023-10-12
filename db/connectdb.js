const mongoose=require("mongoose")

const connectDb= async(mongo_url)=>{
    try{
        const DB_options={
            dbname:"fitdatabase"
        }
        await mongoose.connect(mongo_url,DB_options)
        console.log("database connected successfully");
    }
    catch(err){
        console.log(err)
    }
}


module.exports={connectDb};