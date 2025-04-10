import express from "express"
const router = express.Router();
import { loginUser, logoutUser, signupUser } from "../controllers/authControllers.js";

router.post("/signup",signupUser);
router.post("/login",loginUser);
router.route("/logout").post(logoutUser)

export default router