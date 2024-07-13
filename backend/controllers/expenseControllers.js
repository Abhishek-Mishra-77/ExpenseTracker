import Expense from "../models/expenseModel.js";

const addExpense = async (req, res) => {
  const { title, amount, description, category } = req.body.expense;
  const userId = req.userId;

  try {
    if (!title || !amount || !description || !category) {
      return res.status(404).json({ message: "All field are mandatory" });
    }

    const expense = await Expense.create({
      title,
      amount,
      description,
      category,
      userId: userId,
    });
    return res.status(200).json({ message: "Expense added successfully." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const allExpenses = async (req, res) => {
  const userId = req.userId;
  try {
    const expenses = await Expense.findAll({ where: { userId: userId } });
    console.log(expenses);

    if (!expenses) {
      return res.status(404).json({ message: "No expense found" });
    }

    return res.status(200).json({ expenses });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const removeExpense = async (req, res) => {
  const expenseId = req.params.id;
  const userId = req.userId;
  try {
    const removedExpense = await Expense.findOne({
      where: { id: expenseId, userId: userId },
    });

    if (!removedExpense) {
      return res.status(404).json({ message: "Expense Not found." });
    }

    await Expense.destroy({ where: { id: expenseId } });

    return res.status(200).json({ message: "Expense removed successfully" });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const leaderBoard = async (req, res) => {
  try {
    return res.status(200).json({ message: "Working" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export { addExpense, allExpenses, removeExpense, leaderBoard };
