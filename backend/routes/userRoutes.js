const express =require('express');
const router=express.Router();

const authMiddleware=require('../middleware/auth-middleware');
const {getProfile, searchUsers}=require("../controllers/user-Controller");

router.get("/profile",authMiddleware,getProfile);
router.get("/search",authMiddleware,searchUsers);

module.exports =router;