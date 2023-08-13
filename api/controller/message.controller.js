import Message from "../Models/Message.js";
import Conversatino from '../Models/Conversation.js'
import Conversation from "../Models/Conversation.js";

export const createMessage = async(req, res, next)=>{
    const newMessage = new Message({
        conversationId: req.body.conversationId,
        desc: req.body.desc,
        userId: req.user_id

    })
    try {
        const savedMessage = await newMessage.save()
        await Conversation.findOneAndUpdate({id: req.body.conversationId}, {
            $set: {
                read_by_buyer: !req.isSeller,
                read_by_seller: req.isSeller,
                last_message: req.body.desc
            }
        }, {new: true})
        res.status(200).send(savedMessage)
    } catch (error) {
        console.log(error);
    }
}

export const getMessages = async(req, res, next)=>{
    try {
        const messages = await Message.find({conversationId: req.params.id})
        console.log(messages);
        res.status(200).send(messages)
    } catch (error) {
        console.log(error);
    }
}