import express from "express";
import { getList } from "../controller/movieController.js";
const router = express.Router();

router.get("/", getList);

export default router;
