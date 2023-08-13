import { Router } from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getAllGigs, createGig, getSingleGig, deleteGig } from "../controller/gig.controller.js";

const gigRouter = Router()

gigRouter.post('/create',verifyToken, createGig )
gigRouter.get('/gig/:id', getSingleGig )
gigRouter.get('/all', getAllGigs )
gigRouter.delete('/delete/:id',verifyToken, deleteGig )

export default gigRouter