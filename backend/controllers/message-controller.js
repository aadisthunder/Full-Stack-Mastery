const Message=require('../models/Message');
const sendMessage=async(req,res)=>{
const {chatId,content} =req.body;

const message=await Message.create({
    sender :req.userInfo._id,
    chat :chatId,
    content,
});
res.status(201).json({
    success :true,
    data :message
})
};

const getMessage= async(req,res)=>{
    const messages =await Message.find({
        chat:req.params.chatId
    })
    .populate("sender","username email");

    res.status(200).json({
        success:true,
        data :messages
    })
}

module.exports={
    sendMessage,
    getMessage
}