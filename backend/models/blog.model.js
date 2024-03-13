import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    keywords: {
        type: Array,
        required: true,
        default:[]
    },
    content: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },

});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
