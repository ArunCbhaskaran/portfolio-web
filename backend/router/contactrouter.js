import express from "express";
import { contactc } from "../controller/contactc.js";
const router = express.Router();
router.post("/", contactc);

export default router;
