import Order from "../Models/Order.js"
import { createError } from "../utils/createError.js"
import Gig from '../Models/Gig.js'
import Stripe from 'stripe'

export const getOrders = async(req, res, next)=>{
    try {
        const orders = await Order.find({
            ...(req.isSeller ? {seller_Id: req.user_id} : {buyer_Id : req.user_id}),
            isCompleted: true
        })
        res.status(200).send(orders)
    } catch (error) {
        console.log(error);
    }
        
}

export const createPaymentIntent = async(req, res, next)=>{
    const stripe = new Stripe(process.env.STRIPE_KEY)

    try {

        const gig = await Gig.findById(req.params.id)

        const paymentIntent = await stripe.paymentIntents.create({
            amount: gig.gig_price * 100,
            currency: "inr",
            automatic_payment_methods: {
              enabled: true,
            },
          });

          const newOrder = new Order({
            gig_Id: gig._id,
            image: gig.gig_images[0],
            title: gig.gig_title,
            seller_Id: gig.userId,
            buyer_Id: req.user_id,
            price: gig.gig_price,
            payment_intent: paymentIntent.id
        })
        await newOrder.save()
        res.status(200).send({client_Secret : paymentIntent.client_secret})
    } catch (error) {
        
    }
}

export const confirm = async(req, res, next)=>{
    console.log('confirm');
        try {
           const order =  await Order.findOneAndUpdate({
                payment_intent: req.body.paymentIntent
            },{
                $set:{
                    isCompleted: true
                }
            })
            console.log(order);
            res.status(200).send('Order placed successfully')
        } catch (error) {
            console.log(error);
            
        }
}