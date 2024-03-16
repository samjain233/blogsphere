import { createBlogController } from "../../controllers/blog/createblog.controller.js";
import { getallBlogsController } from "../../controllers/blog/getallblogs.controller.js";
import { updateactiveBlogController } from "../../controllers/blog/updateactiveblog.controller.js";
import { getBlogController, getBlogUsingblogIdController } from "./../../controllers/blog/getblog.controller.js";
import express from "express";
import { authMiddleware } from "./../../middleware/auth.middleware.js";
import { getContentCategoryController } from "../../controllers/blog/getcontentcategory.controller.js";
import { deleteBlogController } from "../../controllers/blog/deleteblog.controller.js";
import { getAllUserBlogsController } from "../../controllers/blog/getAllUserBlogs.controller.js";
import { updateBlogController } from "../../controllers/blog/updateBlog.controller.js";

const router = express.Router();

router.post("/postblog", authMiddleware, createBlogController);
router.get("/getblog", getBlogController);
router.post("/getblogusingid",authMiddleware,getBlogUsingblogIdController);
router.get("/getallblogs", getallBlogsController);
router.put("/updateactiveblog", authMiddleware, updateactiveBlogController);
router.get("/createcontent", getContentCategoryController);
router.post("/deletetblog", authMiddleware, deleteBlogController);
router.post("/getalluserblogs", authMiddleware, getAllUserBlogsController);
router.post("/updateblog",authMiddleware,updateBlogController);

export default router;
