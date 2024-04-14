import mongoose from "mongoose"
import { Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    picture: {
        type: String,
        default: "https://i.ibb.co/FV1yg3g/customer.png",
    },
    bio: {
        type: String,
        max: 250,
    },
    role: {
        type: [String],
        default: "Subscriber",
        enum: ["Subscriber", "Instructor", "Admin"],
    },
    stripe_account_id: { type: String },
    stripe_seller: {},
    stripeSession: {},
}, { timestamps: true })

export default mongoose.model("User", userSchema)