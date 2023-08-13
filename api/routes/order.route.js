import { Router } from "express";
import {verifyToken} from '../middleware/jwt.js'
import { createPaymentIntent, getOrders, confirm } from "../controller/order.controller.js";

const router = Router()

// router.post('/order/:id', verifyToken, createOrder )
router.get('/', verifyToken, getOrders )
router.post('/create-payment-intent/:id', verifyToken, createPaymentIntent)
router.put('/', verifyToken, confirm)



export default router