import { Router } from "express";
import { verifyToken } from "../middleware/jwt.js";
import { updateConversation, createConversation, getConversations, getSingleConversation } from "../controller/conversation.controller.js";

const router = Router()

router.get('/', verifyToken, getConversations)
router.post('/', verifyToken, createConversation)
router.get('/single/:id', verifyToken, getSingleConversation)
router.put('/:id', verifyToken, updateConversation)



export default router