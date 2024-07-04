import Expense from "../models/expenseModel.js";

const addExpense = async (req, res) => {
  const { title, amount, description, category } = req.body.expense;
  try {
    if (!title || !amount || !description || !category) {
      return res.status(404).json({ message: "All field are mandatory" });
    }

    const expense = await Expense.create({
      title,
      amount,
      description,
      category,
    });
    return res.status(200).json({ message: "Expense added successfully." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const allExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
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
  try {
    const removedExpense = await Expense.findOne({ where: { id: expenseId } });

    if (!removedExpense) {
      return res.status(404).json({ message: "Expense Not found." });
    }

    await Expense.destroy({ where: { id: expenseId } });

    return res.status(200).json({ message: "Expense removed successfully" });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export { addExpense, allExpenses, removeExpense };
