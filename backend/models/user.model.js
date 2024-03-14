//email
//password
//username
//refresh token

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        index:true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    refresh: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: true,
    },
});

const User = mongoose.model("User", userSchema);
export default User;
