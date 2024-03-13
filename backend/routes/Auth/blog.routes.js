import express from "express";
import { createBlogController } from "../../controllers/blog/createBlog.controller";

const router = express.Router();

router.post("/createblog", createBlogController );

export default router;