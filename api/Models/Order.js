import { Schema, model } from "mongoose";


const orderSchema = new Schema({
        gig_Id: {
            type: String,
            required: true
        },
        image:{
            type: String,
            required: false
        },
        title:{
            type:String,
            required: true
        },
        price:{
            type:Number,
            required: true
        },
        seller_Id:{
            type:String,
            required: true
        },
        buyer_Id:{
            type:String,
            required: true
        },
        isCompleted:{
            type:Boolean,
            default: false
        },
        payment_intent:{
            type: String,
            required: true
        }
}, {
    timestamps: true
})

export default model('Order', orderSchema)