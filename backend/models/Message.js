const mongoose =require('mongoose');

const messageSchema=new mongoose.Schema({
    sender :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"chat",
    },
    content :String,

    seen:{
        type:Boolean,
        default:false
    }

})

module.exports=mongoose.model("Message",messageSchema)