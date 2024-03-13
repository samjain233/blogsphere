import { ApiResponse } from "../../lib/ApiResponse.js";
import { asyncHandler } from "../../lib/AsyncHandler.js";
import Blog from "../../models/blog.model.js";

export const getallBlogsController = asyncHandler(async (req, res) => {
    const { slug } = req.query;
    const allBlogs = await Blog.find({});
    
       
    //const allblogs = await allBlogs.toArray();
    
    res.status(200).json(new ApiResponse(200, "getting all blogs",allBlogs));
});