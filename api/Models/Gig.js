import mongoose, { Schema, Model, model } from "mongoose";

const gigSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    gig_title: {
      type: String,
      required: true,
    },
    gig_description: {
      type: String,
      required: true,
    },
    gig_totalStars: {
      type: Number,
      default: 0,
    },
    gig_starNumber: {
      type: Number,
      default: 0,
    },
    gig_category: {
      type: String,
      required: true,
    },
    gig_price: {
      type: Number,
      required: true,
    },
    gig_cover_image: {
      type: String,
      required: true,
    },
    gig_images: {
      type: [String],
      required: true,
    },
    gig_short_title: {
      type: String,
      required: true,
    },
    gig_short_description: {
      type: String,
      required: true,
    },
    gig_delivery_time: {
      type: Number,
      required: true,
    },
    gig_revisions: {
      type: Number,
      required: true,
    },
    gig_features: {
        type: [String],
        required: false
    },
    gig_sales: {
        type: Number,
        default: 0
    }
  },
  {
    timestamps: true,
  }
);

export default model('Gig', gigSchema)