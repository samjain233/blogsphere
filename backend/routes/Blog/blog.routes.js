import { createBlogController } from '../../controllers/blog/createblog.controller.js';
import { getBlogController } from './../../controllers/blog/getblog.controller.js';
import express from "express";
const router = express.Router();
router.get("/postblog",createBlogController );
router.post("/getblog",getBlogController );

export default router;