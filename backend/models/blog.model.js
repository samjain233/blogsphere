import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
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
        Type: Boolean,
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
        Type: Number,
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
