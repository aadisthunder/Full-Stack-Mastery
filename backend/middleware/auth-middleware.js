const jwt=require('jsonwebtoken');
const User=require("../models/User");
require('dotenv').config();
 const authMiddleware=async (req,res,next)=>{
    // console.log('auth middleware is called')
    const authHeader=req.headers['authorization'];
    console.log(authHeader);
    const token =authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({
            success:false,
            message:'access denied no token provided please login to continue'
        })
    }
    //decode this token
    try{
     const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
     console.log(decoded);

     const user =await User.findById(decoded.id).select("-password");
     req.userInfo=user;
     next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'access denied no token provided please login to continue'
        })
    }
    
 }

 module.exports=authMiddleware;