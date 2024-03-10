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
    keyword: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
