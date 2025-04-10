import express from "express"
import checkauth from "../middleware/authMiddleware.js";
import { getAllUserExceptSelf } from "../controllers/userControllers.js";
const router = express.Router();

router.route("/").get(checkauth,getAllUserExceptSelf);

export default router