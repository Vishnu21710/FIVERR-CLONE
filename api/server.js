import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import reviewRouter from './routes/review.route.js'
import orderRouter from './routes/order.route.js'
import gigRouter from './routes/gig.route.js'
import conversationRouter from './routes/conversation.route.js'
import messageRouter from './routes/mesasge.route.js'
import authRouter from './routes/auth.router.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

dotenv.config()

app.use(cors({origin: "http://localhost:5173", credentials:true}))
app.use(express.json())
app.use(cookieParser())

app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)
app.use('/api/orders', orderRouter)
app.use('/api/messages', messageRouter)
app.use('/api/conversations', conversationRouter)
app.use('/api/gigs', gigRouter)
app.use('/api/auth', authRouter)


app.use((err, req, res ,next)=>{
    const errStatus = err.errStatus || 500
    const errMessage = err.message || 'Something went wrong'
    return res.status(errStatus).send(errMessage)
})


mongoose.connect('mongodb://127.0.0.1:27017/fiverrClone', {useNewUrlParser: true}).then((data)=>{
    console.log('connected to database');
}).catch((error)=>console.log(error))

app.get('/', (req, res)=>{
    res.json({message: 'hello world'})
})

app.listen(8080, ()=>console.log(`Listening to port 8080`))