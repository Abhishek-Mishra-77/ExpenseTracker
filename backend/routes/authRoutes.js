import express from "express";
const router = express.Router();

import { signUpuser, signInUser } from "../controllers/authControllers.js";

router.post("/create", signUpuser);
router.post("/login", signInUser);

export default router;
