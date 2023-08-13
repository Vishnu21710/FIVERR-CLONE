import { Schema, Model, model } from "mongoose";

const reviewSchema = new Schema({
        gig_Id: {
            type: String,
            required: true,
        },
        user_Id: {
            type: String,
            required: true,
        },
        review_star: {
            type: Number,
            required: true,
            enum: [1, 2, 3, 4, 5]
        },
        review_description: {
            type: String,
            required: true,
        },
}, {
    timestamps: true
})

export default model('Review', reviewSchema)