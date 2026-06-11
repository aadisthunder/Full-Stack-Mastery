const onlineUsers=new Map();

const socketHandler=(io)=>{
    io.on("connection",(socket)=>{
    console.log("User Connected :",socket.id);

    // user login by this
    socket.on("join",(userId)=>{
        console.log("userJoined",userId);
        onlineUsers.set(
            userId,socket.id
        );

        io.emit("onlineUsers",Array.from(onlineUsers.keys()));
        console.log("OnlineUsers",onlineUsers);
    });
    
 
    // join particular Chat

    socket.on("joinChat",(chatId)=>{
        socket.join(chatId);
        console.log(`Joined Chat ${chatId}`);
    });

    // messages 

    socket.on("sendMessage",(data)=>{
        console.log("message",data);
        io.to(data.chatId).emit("receiveMessage",data);
    });

    // typing
    socket.on("typing",(chatId)=>{
        socket.to(chatId).emit("typing");
    });

    // stop type chatting
    socket.on("stopTyping",(chatId)=>{
        socket.to(chatId).emit("stopTyping");
    });

    socket.on("disconnect",()=>{
        for(const [userId,socketId] of onlineUsers){
            if(socketId===socket.id){
                onlineUsers.delete(userId);
                break;
            }
        }

        io.emit("onlineUsers",Array.from(onlineUsers.keys()));
        console.log("User Disconnected");
    });
});

};

module.exports=socketHandler;