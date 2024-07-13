import express from "express";
const router = express();

import { premiumUser } from "../controllers/premiumControllers.js";

router.post("/create-checkout-session", premiumUser);

export default router;
