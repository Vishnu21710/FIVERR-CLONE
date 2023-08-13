import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: false,
        unique: true
    },
    image: {
        type :String,
        required: false
    },
    country:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    isSeller: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export default mongoose.model('User', userSchema)