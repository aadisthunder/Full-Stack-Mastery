const express=require('express');

const router =express.Router();

const authMiddleware =require("../middleware/auth-middleware");

const {createChat}=require("../controllers/chat-controller");

router.post("/talk",authMiddleware,createChat);


module.exports =router;