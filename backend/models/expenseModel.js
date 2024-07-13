import Sequelize from "sequelize";
import sequelize from "../utils/database.js";

const Expense = sequelize.define("expense", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  amount: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Expense;
