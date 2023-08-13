import { createError } from "../utils/createError.js";
import Gig from "../Models/Gig.js";

export const createGig = async (req, res, next) => {
  console.log("hello world");
  if (!req.isSeller)
    return next(
      createError(
        401,
        "You are not the Seller, Become a seller to create your gig"
      )
    );
  const newGig = new Gig({
    userId: req.user_id,
    ...req.body,
  });
  console.log(newGig);
  try {
    const savedGig = await newGig.save();
    res.status(200).send(savedGig);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
export const getSingleGig = async (req, res, next) => {
  try {
    const currentGig = await Gig.findById(req.params.id);
    if (!currentGig) return next(createError(404, "Gig not found"));
    res.status(200).send(currentGig);
  } catch (error) {
    next(error);
  }
};
export const getAllGigs = async (req, res, next) => {
    const q = req.query
    console.log('Hello World')
    const filters = {
      
          ...(q.userId && { userId: q.userId }),
          ...(q.category && { gig_category: q.category }),
          ...((q.min || q.max) && {
            gig_price: {
              ...(q.min && { $gt: q.min }),
              ...(q.max && { $lt: q.max }),
            },
          }),
          ...(q.search && { gig_title: { $regex: q.search, $options: "i" } }),  
    }
    console.log(filters);
    
    try {
        const allGigs = await Gig.find(filters).sort({[q.sort]: -1});
        res.status(200).send(allGigs);
      } catch (error) {
        console.log(error);
      }
};
export const deleteGig = async (req, res, next) => {
  try {
    const currentGig = await Gig.findById(req.params.id);
    if (currentGig.userId !== req.user_id)
      return next(createError(401, "Not Authorized for this action"));
    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig Deleted Successfully");
  } catch (error) {
    next(createError(401, "No such Gig exits"));
  }
};
