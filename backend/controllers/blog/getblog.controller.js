import { ApiResponse } from "../../lib/ApiResponse.js";
import { asyncHandler } from "../../lib/AsyncHandler.js";
import Blog from "../../models/blog.model.js";

export const getBlogController = asyncHandler(async (req, res) => {
    const { slug } = req.body;

    const blogData = await Blog.findOne({slug:slug});
    
    res.status(200).json(new ApiResponse(200, "blog created",blogData));
});
