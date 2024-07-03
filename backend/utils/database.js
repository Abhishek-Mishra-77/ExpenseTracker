import Sequelize from "sequelize";

const sequelize = new Sequelize("expensetracker", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
  timezone: "+05:30",
});

export default sequelize;
