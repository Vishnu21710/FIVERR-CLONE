import Conversation from '../Models/Conversation.js'
import {createError} from '../utils/createError.js'

export const getConversations = async(req, res, next)=>{
    try {
        const conversations = await Conversation.find(req.isSeller ? {seller_id: req.user_id}: {buyer_id: req.user_id})
        res.status(200).send(conversations)
    } catch (error) {
        
    }
}

export const createConversation = async(req, res, next)=>{
    
    const newConversation = new Conversation({
        id: req.isSeller ? req.user_id + req.body.to : req.body.to + req.user_id,
        seller_id: req.isSeller ? req.user_id : req.body.to,
        buyer_id: req.isSeller ? req.body.to : req.user_id,
        read_by_seller: req.isSeller,
        read_by_buyer: !req.isSeller
    })

    try {
        const saved_conversation = await newConversation.save()
        res.status(200).send(saved_conversation)
    } catch (error) {
        console.log(error);
    }
}

export const getSingleConversation = async(req, res, next)=>{
    try {
        const conversation = await Conversation.findOne({id: req.params.id}).sort({updatedAt: -1})
        if(!conversation) return next(createError(404, 'No such conversation'))
        res.status(200).send(conversation)
    } catch (error) {
        console.log(error);
    }
}

export const updateConversation = async(req, res, next)=>{
    try {
         const updatedConversation = await Conversation.findOneAndUpdate({id: req.params.id}, {
            $set:{
                ...(req.isSeller ? {read_by_seller: true} : {read_by_buyer: true})
            }
         })
         res.status(201).send(updatedConversation)
    } catch (error) {
        console.log(error);
    }
}