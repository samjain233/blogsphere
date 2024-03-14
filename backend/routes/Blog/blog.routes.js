import { createBlogController } from '../../controllers/blog/createblog.controller.js';
import { getallBlogsController } from '../../controllers/blog/getallblogs.controller.js';
import { updateactiveBlogController } from '../../controllers/blog/updateactiveblog.controller.js';
import { getBlogController } from './../../controllers/blog/getblog.controller.js';
import express from "express";
import { authMiddleware } from './../../middleware/auth.middleware.js';
const router = express.Router();
router.post("/postblog",authMiddleware,createBlogController );
router.post("/getblog",getBlogController );
router.get("/getallblogs", getallBlogsController);
router.put("/updateactiveblog", authMiddleware,updateactiveBlogController);


export default router;