const User =require('../models/User');
const getProfile=async (req,res)=>{
    res.status(200).json({
        success :true,
        user:req.userInfo
    });
};
const searchUsers =async(req,res)=>{
    const keyword=req.query.keyword;

    const users =await User.find({
        username:{
            $regex:keyword, //so mongo db chaeck all username
            $options:"i" // case sensitive ke liye
        }
    }).select("-password");

    res.status(201).json({
        success:true,
        data :users
    })
}


module.exports ={
    getProfile, searchUsers
}