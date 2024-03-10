import express from "express";
const router = express.Router();

import authRoutes from "./Auth/auth.routes.js";

router.use("/auth", authRoutes);

export default router;
