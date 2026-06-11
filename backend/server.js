const express= require('express');
const connectToDB = require('./Database/db');
require('dotenv').config();
const {Server}=require("socket.io");
const app = express();
const socketHandler =require("./sockets/socket")
const http =require('http');
const server=http.createServer(app);
const authRoutes=require('./routes/authRoutes');
const userRoutes =require('./routes/userRoutes');
const chatRoutes=require('./routes/chat-routes');
const messageRoutes=require("./routes/message-routes");



app.use(express.json());
const PORT= process.env.PORT || 3000

connectToDB();

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/chat",chatRoutes);
app.use("/api/message",messageRoutes);

const io=new Server(server, {
    cors:{
        origin:"http://localhost:5173", // just to add a react
        methods:["GET","POST"]
    }
});
socketHandler(io);


server.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
});