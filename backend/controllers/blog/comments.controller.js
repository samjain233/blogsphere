import { ApiResponse } from "../../lib/ApiResponse.js";
import { asyncHandler } from "../../lib/AsyncHandler.js";
import Blog from "../../models/blog.model.js";

export const createBlogController = asyncHandler(async (req, res) => {
    const { postId,message} = req.body;
    const user=req.user;
    const username=user.username;

    const blog = await Blog.create({
        slug,
        title,
        content,
        imageUrl,
        keywords,
        author:user._id,
    });
    res.status(200).json(new ApiResponse(200, "blog created"));
});