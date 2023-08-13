import mongoose from "mongoose";
import User from "../Models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createError } from "../utils/createError.js";

export const register = async(req, res, next)=>{
        try {
            const salt = bcrypt.genSaltSync(10)
            const newPass = bcrypt.hashSync(req.body.password, salt)
            const newUser = new User({...req.body, password:  newPass})
            
            await newUser.save()
            res.status(201).send('User registered Successfully')

        } catch (error) {
                next(error)
        }
}
export const login = async(req, res, next)=>{
        try {
            const userDoc = await User.findOne({username: req.body.username})
            const isCorrect = bcrypt.compareSync(req.body.password, userDoc.password)

            if(isCorrect){
                
                const {password, ...info} = userDoc._doc
                const token = jwt.sign({
                    id: userDoc._id,
                    isSeller: userDoc.isSeller
                }, process.env.JWT_KEY)
                res.cookie("accessToken", token, {httpOnly:true}).status(200).send(info)
            }else{
                const error = createError(401, 'Password does not match, Re-enter your password ')
                next(error)
            }

        } catch (error) {
                error.message = 'Invalid Username / User does not exist'
                next(error)
        }
}
export const logout = async(req, res)=>{
    try {
        res.clearCookie('accessToken', {
            sameSite: "none",
            secure: true
        }).status(200).send('User Logged Out')
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}

