import { createBlogController } from '../../controllers/blog/createblog.controller.js';
import { getallBlogsController } from '../../controllers/blog/getallblogs.controller.js';
import { updateactiveBlogController } from '../../controllers/blog/updateactiveblog.controller.js';
import { getBlogController } from './../../controllers/blog/getblog.controller.js';
import express from "express";
import { authMiddleware } from './../../middleware/auth.middleware.js';
import { getContentCategoryController } from '../../controllers/blog/getcontentcategory.controller.js';
import { deleteBlogController } from '../../controllers/blog/deleteblog.controller.js';
import { commentsBlogController } from '../../controllers/blog/commentsblog.controller.js';
const router = express.Router();
router.post("/postblog",authMiddleware,createBlogController);
router.post("/getblog",getBlogController );
router.get("/getallblogs", getallBlogsController); 
router.put("/updateactiveblog", authMiddleware,updateactiveBlogController);
router.get("/createcontent",getContentCategoryController);
router.delete("/deletetblog", authMiddleware,deleteBlogController);
router.post('/commentsblog',authMiddleware,commentsBlogController);

export default router;