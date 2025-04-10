
import express from "express"
import { getMessages, sendMessage } from "../controllers/messageControllers.js";
import checkauth from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/send/:id").post(checkauth,sendMessage);
router.route("/:id").get(checkauth,getMessages);

export default router