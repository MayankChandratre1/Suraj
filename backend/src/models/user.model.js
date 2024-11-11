import mongoose from "mongoose";

const userScema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    membership: {
        type: String,
        required: true
    }
})

const User = mongoose.model("user", userScema);

export default User;