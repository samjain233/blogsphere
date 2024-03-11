import { createBlogController } from '../../controllers/blog/createblog.controller.js';

import express from "express";
const router = express.Router();

router.post("/postblog",createBlogController );

export default router;