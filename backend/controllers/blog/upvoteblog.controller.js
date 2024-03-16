import { ApiResponse } from "../../lib/ApiResponse.js";
import { asyncHandler } from "../../lib/AsyncHandler.js";
import { ApiError } from "../../lib/ApiError.js";
import Blog from "../../models/blog.model.js";

export const upvoteBlogController = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    const userId = req.user._id;

    const blog = await Blog.findById(blogId);
    if (!blog) {
        throw new ApiError(404, "Blog not found");
    }
    if (blog.upvotes.includes(userId)) {
        blog.upvotes.pop(userId);
        // throw new ApiError(400, "You have already upvoted this blog");
    } else {
        blog.upvotes.push(userId);
    }
    await blog.save();
    return res
        .status(200)
        .json(new ApiResponse(200, "Blog upvoted successfully"));
});
