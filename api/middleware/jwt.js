import jwt from 'jsonwebtoken'
import { createError } from '../utils/createError.js';

export const verifyToken = (req, res, next)=>{
    const token = req.cookies.accessToken
    if(!token) return next(401, 'You are not Authenticated !')
    console.log(token);

    jwt.verify(token, process.env.JWT_KEY, (err, payload)=>{
        if(err) return next(createError(403, 'Invalid Token / Token Expired'))

        req.user_id = payload.id
        req.isSeller = payload.isSeller

    })
    next()
}