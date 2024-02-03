import express from "express";
import { test } from "../controllers/public";

const router = express.Router();

router.get("/test", test)

export default router;