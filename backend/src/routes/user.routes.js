import { Router } from "express";
import { registerUser , loginUser} from "../controllers/user.controller.js";

const router = Router();

router.route("/sign-up").post(registerUser);
router.route("/sign-in").post(loginUser);

export default router;