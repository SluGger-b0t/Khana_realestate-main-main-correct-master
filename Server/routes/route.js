import express from "express";
import sendMail from "../controllers/sendMail.js"
import createProperty from "../controllers/propertyController.js";
const router = express.Router();
router.post("/send",sendMail);
router.post("/SaveProperty", createProperty);
export default router;