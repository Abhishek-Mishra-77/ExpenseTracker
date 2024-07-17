import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
import {
  addExpense,
  allExpenses,
  removeExpense,
  allUserExpense,
  leaderBoard,
} from "../controllers/expenseControllers.js";

router.post("/addexpense", authMiddleware, addExpense);
router.post("/allexpenses", authMiddleware, allExpenses);
router.post("/", allUserExpense);
router.get("/userleaderboard", leaderBoard);
router.post("/removeexpense/:id", authMiddleware, removeExpense);

export default router;
