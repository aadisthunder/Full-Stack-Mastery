const mongoose=require('mongoose');

const chatSchema=new mongoose.Schema({
    participants :[{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    isGroupChat :{
        type:Boolean,
        default:false
    },
    groupName :String
});

module.exports=mongoose.model("Chat",chatSchema);