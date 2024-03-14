import { createBlogController } from '../../controllers/blog/createblog.controller.js';
import { getallBlogsController } from '../../controllers/blog/getallblogs.controller.js';
import { updateactiveBlogController } from '../../controllers/blog/updateactiveblog.controller.js';
import { getBlogController } from './../../controllers/blog/getblog.controller.js';
import express from "express";
const router = express.Router();
router.get("/postblog",createBlogController );
router.post("/getblog",getBlogController );
router.get("/getallblogs", getallBlogsController);
router.put("/updateactiveblog", updateactiveBlogController);


export default router;