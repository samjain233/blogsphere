import { ApiResponse } from "../../lib/ApiResponse.js";
import { asyncHandler } from "../../lib/AsyncHandler.js";
import { ApiError } from "../../lib/ApiError.js";
import Blog from "../../models/blog.model.js";

export const commentsBlogController = asyncHandler(async (req, res) => {
    const { postId,message} = req.body;
    const user=req.user;
    
    // Check if user is authenticated
    if (!user) {
        throw new ApiError(404, "Unauthorized: User not authenticated");
    }

    // Retrieve username from authenticated user
    const username = user.username;

    // Find the blog post by postId
    const blogPost = await Blog.findById(postId);

    // If blog post not found
    if (!blogPost) {
        throw new ApiError(404, "Blog post not found");
    }

    // Add comment to blog post
    blogPost.comments.push({ message, username });

    // Save updated blog post
    await blogPost.save();

    res.status(200).json(new ApiResponse(200, "Comment added successfully"));
});