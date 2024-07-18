import Sequelize from "sequelize";
import sequelize from "../utils/database.js";

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isPremiumUser: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  totalExpenses: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
  }
});

export default User;
