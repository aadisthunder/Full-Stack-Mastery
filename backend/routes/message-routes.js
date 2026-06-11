const express=require('express');

const router=express.Router();

const  authMiddleware=require('../middleware/auth-middleware');

const {sendMessage,getMessage}=require('../controllers/message-controller');

router.post("/send",authMiddleware,sendMessage);

router.get('/:chatId',getMessage);

module.exports=router;