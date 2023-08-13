import { Router } from "express";
import { addReview, getReview, deleteReview } from "../controller/review.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = Router()

router.post('/',verifyToken, addReview)
router.get('/:id', getReview)
router.delete('/:id',verifyToken, deleteReview)

export default router