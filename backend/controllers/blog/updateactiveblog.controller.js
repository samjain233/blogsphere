import { ApiResponse } from "../../lib/ApiResponse.js";
import { asyncHandler } from "../../lib/AsyncHandler.js";
import Blog from "../../models/blog.model.js";

export const updateactiveBlogController = asyncHandler(async (req,res) => {
    const { postId } = req.params;
    const { isActive } = req.body;

    const post = await Blog.findById(postId);
    if (!post) {
        return res.status(404).json(new ApiResponse(404, 'Post not found'));
    }

    post.active = isActive;
    await post.save();

    res.status(200).json(new ApiResponse(200, "Blog updated successfully"));
});