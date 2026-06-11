const User=require('../models/User');
const bcrypt=require('bcrypt');
const generateToken=require("../utils/generateToken");

const registerUser =async(req,res)=>{
    try{
    const {username,email,password} =req.body;
    const userExist =await User.findOne({email});

    if(userExist){
        return res.status(400).json({
            success :false,
            message :"User Already Registered"
        });
    }

    const salt =await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);

    const user =await User.create({
        username,
        email,
        password:hashPassword
    });
    res.status(201).json({
        id :user._id,
        username:user.username,
        email :user.email,
        token :generateToken(user._id)
    });

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message :"Some Thing Went Wrong"
        })
    }
}

const loginUser=async(req,res)=>{
try{
const {email,password} =req.body;
const user =await User.findOne({email});

if(user && (await bcrypt.compare(password,user.password))){
    res.status(200).json({
        _id : user._id,
        username :user.username,
        email :user.email,
        token :generateToken(user._id),
        message :" Login successfull"

    });
}
else{
    res.status(401).json({
        success :false,
        message :"Invalid Credential "
    })
}
}catch(e){
    console.log(e);
    res.status(500).json({
            success : false,
            message :"Some Thing Went Wrong"
        })
}
}

module.exports= {
    registerUser,loginUser
}