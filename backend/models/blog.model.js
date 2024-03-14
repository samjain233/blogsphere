import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId, ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    keywords: {
        type: Array,
        required: true,
        default: [],
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
    comments: [
        {
            name: String,
            comment: String,
            default: [],
        },
    ],
    upvotes: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] },
    ],
    views: {
        type: Number,
        default: 0,
    },
    monthlyViews: [
        {
            month: String,
            views: Number,
            default: [],
        },
    ],
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
