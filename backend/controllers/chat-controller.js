const Chat=require("../models/chat");
const createChat= async(req,res)=>{
    const {userId}=req.body;
    let chat =await Chat.findOne({
    participants :{
        $all:[
            req.userInfo._id,
            userId
        ]
    }
    });
    if(chat){
        return res.json(chat);
    }

    chat = await Chat.create({
        participants:[
            req.userInfo._id,
            userId
        ]
    });
    res.status(201).json({
        success :true,
        data :chat
    })
}
module.exports={
    createChat
}