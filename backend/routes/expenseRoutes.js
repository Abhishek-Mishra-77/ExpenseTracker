import express from "express";

const router = express.Router();
import { addExpense, allExpenses } from "../controllers/expenseControllers.js";

router.post("/addexpense", addExpense);
router.get("/allexpenses", allExpenses);

export default router;
