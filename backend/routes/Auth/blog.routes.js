import express from "express";
import { createBlogController } from "../../controllers/blog/createblog.controller.js";

const router = express.Router();

router.post("/createblog", createBlogController );

export default router;