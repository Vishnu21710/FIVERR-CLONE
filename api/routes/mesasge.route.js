import { Router } from "express";
import {verifyToken} from '../middleware/jwt.js'
import { getMessages, createMessage } from "../controller/message.controller.js";

const messageRouter = Router()

messageRouter.post('/', verifyToken, createMessage)
messageRouter.get('/:id', verifyToken, getMessages)


export default messageRouter