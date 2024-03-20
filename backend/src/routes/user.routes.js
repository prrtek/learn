import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.route("/login").post(loginUser);
userRouter.route("/register").post(registerUser);

export default userRouter;
