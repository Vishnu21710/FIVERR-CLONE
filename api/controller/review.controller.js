import { createError } from "../utils/createError.js"
import Review from '../Models/Review.js'
import Gig from "../Models/Gig.js"

export const addReview = async(req, res, next)=>{
    if(req.isSeller) return next(createError(403, "Seller Cannot Create Review"))

    const newReview = new Review({
        user_Id: req.user_id,
        gig_Id: req.body.gig_Id,
        review_star: req.body.review_star,
        review_description: req.body.review_description
    })
    try {
        const review = await Review.findOne({gig_Id: req.body.gig_Id, user_Id: req.user_id})
        console.log(review);
        if(review) return next(createError(401, 'You have already added a review for this gig'))
        const savedReview = await newReview.save()
       
        res.status(200).send(savedReview)
        await Gig.findOneAndUpdate(req.body.user_Id, {$inc:{gig_totalStars: req.body.review_starstar, gig_starNumber:1}})
    } catch (error) {
        console.log(error);
        next(error.status, error.message)
    }
}

export const getReview = async(req, res, next)=>{
    try {
        console.log(req.params.id);
        const reviews = await Review.find({gig_Id:req.params.id})
        res.status(200).send(reviews)
    } catch (error) {
        next(error.status, error.message)
    }
}

export const deleteReview = (req, res, next)=>{
    try {
        
    } catch (error) {
        next(error.status, error.message)
    }
}