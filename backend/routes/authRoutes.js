import express from "express";
const router = express.Router();
import authMiddlewares from "../middlewares/authMiddleware.js";

import {
  signUpuser,
  signInUser,
  getUserDetails,
} from "../controllers/authControllers.js";

router.post("/create", signUpuser);
router.post("/login", signInUser);
router.post("/getUser", authMiddlewares, getUserDetails);

export default router;
