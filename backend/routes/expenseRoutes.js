import express from "express";

const router = express.Router();
import {
  addExpense,
  allExpenses,
  removeExpense,
} from "../controllers/expenseControllers.js";

router.post("/addexpense", addExpense);
router.get("/allexpenses", allExpenses);
router.delete("/removeexpense/:id", removeExpense);

export default router;
