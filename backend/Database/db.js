const mongoose= require('mongoose');
const dns =require('dns');

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
])

const connectToDB =async()=>{
    try{
   mongoose.connect(process.env.MONGO_URL);
   console.log(" MongoDB Connected");
    }catch(e){
     console.log(e);
    }
}

module.exports=connectToDB;