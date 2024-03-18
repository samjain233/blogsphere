import { createBlogController } from "../../controllers/blog/createblog.controller.js";
import { getallBlogsController } from "../../controllers/blog/getallblogs.controller.js";
import { updateactiveBlogController } from "../../controllers/blog/updateactiveblog.controller.js";
import {
    getBlogController,
    getBlogUsingblogIdController,
} from "./../../controllers/blog/getblog.controller.js";
import express from "express";
import { authMiddleware } from "./../../middleware/auth.middleware.js";
import { getContentCategoryController } from "../../controllers/blog/getcontentcategory.controller.js";
import { deleteBlogController } from "../../controllers/blog/deleteblog.controller.js";
import { getAllUserBlogsController } from "../../controllers/blog/getAllUserBlogs.controller.js";
import { updateBlogController } from "../../controllers/blog/updateBlog.controller.js";
import {
    commentsBlogController,
    getCommentsBlogController,
} from "../../controllers/blog/commentsblog.controller.js";
import {
    getNoOfUpvotes,
    upvoteBlogController,
} from "../../controllers/blog/upvoteblog.controller.js";
import { getUserProfileController } from "../../controllers/follow/getUserProfile.controller.js";
import {
    checkIfIFollowController,
    followUserController,
    unfollowUserController,
} from "../../controllers/follow/followUser.controller.js";
import { dashboardAnalyticsController } from "../../controllers/blog/dashboardAnalytics.controller.js";

const router = express.Router();

router.post("/postblog", authMiddleware, createBlogController);
router.get("/getblog", getBlogController);
router.post("/getblogusingid", authMiddleware, getBlogUsingblogIdController);
router.get("/getallblogs", getallBlogsController);
router.put("/updateactiveblog", authMiddleware, updateactiveBlogController);
router.get("/createcontent", getContentCategoryController);
router.post("/deletetblog", authMiddleware, deleteBlogController);
router.post("/getalluserblogs", authMiddleware, getAllUserBlogsController);
router.post("/updateblog", authMiddleware, updateBlogController);
router.post("/commentsblog", authMiddleware, commentsBlogController);
router.post("/getcomments", getCommentsBlogController);
router.post("/getcountupvotes", getNoOfUpvotes);
router.post("/upvotepost", authMiddleware, upvoteBlogController);
router.post(
    "/dashboardanalytics",
    authMiddleware,
    dashboardAnalyticsController,
);

//getting userprofile - following system
router.post("/userprofileview", getUserProfileController);
router.post("/follow", authMiddleware, followUserController);
router.post("/unfollow", authMiddleware, unfollowUserController);
router.post("/checkififollow", authMiddleware, checkIfIFollowController);

export default router;
