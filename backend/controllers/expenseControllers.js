import Expense from "../models/expenseModel.js";
import User from "../models/userModel.js";
import sequelize from "../utils/database.js";

const addExpense = async (req, res) => {
  const { title, amount, description, category } = req.body.expense;
  const userId = req.userId;
  const transaction = await sequelize.transaction();

  try {
    if (!title || !amount || !description || !category) {
      return res.status(404).json({ message: "All fields are mandatory" });
    }

    // Find the user by userId
    const user = await User.findByPk(userId, { transaction });
    if (!user) {
      await transaction.rollback();
      return res.status(404).json({ message: "User not found" });
    }

    // Create the expense
    const expense = await Expense.create({
      title,
      amount,
      description,
      category,
      userId: userId,
    }, {
      transaction
    });

    // Update the total expenses for the user
    user.totalExpenses = (parseFloat(user.totalExpenses) || 0) + parseFloat(amount);
    await user.save({ transaction });

    // Commit the transaction
    await transaction.commit();
    return res.status(200).json({ message: "Expense added successfully." });
  } catch (error) {
    // Rollback the transaction in case of error
    await transaction.rollback();
    console.error('Error adding expense:', error); // Log the error for debugging
    return res.status(400).json({ error: error.message });
  }
};


const allExpenses = async (req, res) => {
  const userId = req.userId;
  try {
    const expenses = await Expense.findAll({ where: { userId: userId } });

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
  const transaction = await sequelize.transaction();

  try {
    const removedExpense = await Expense.findOne({
      where: { id: expenseId, userId: userId },
      transaction
    });

    if (!removedExpense) {
      await transaction.rollback(); // Ensure rollback if expense is not found
      return res.status(404).json({ message: "Expense not found." });
    }

    // Find the user by userId
    const user = await User.findByPk(userId, { transaction });
    if (!user) {
      await transaction.rollback();
      return res.status(404).json({ message: "User not found" });
    }

    // Update the total expenses for the user
    user.totalExpenses = (parseFloat(user.totalExpenses) || 0) - parseFloat(removedExpense.amount);
    await user.save({ transaction });

    // Destroy the expense
    await Expense.destroy({ where: { id: expenseId }, transaction });

    // Commit the transaction
    await transaction.commit();
    return res.status(200).json({ message: "Expense removed successfully" });
  } catch (error) {
    // Rollback the transaction in case of error
    await transaction.rollback();
    console.error('Error removing expense:', error); // Log the error for debugging
    return res.status(400).json({ error: error.message });
  }
};


const leaderBoard = async (req, res) => {
  try {
    return res.status(200).json({ message: "Working" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const allUserExpense = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    if (!expenses) {
      return res.status(404).json({ message: "Expense not found." });
    }

    return res.status(200).json({ expenses })
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export { addExpense, allExpenses, removeExpense, leaderBoard, allUserExpense };
