import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import Expense from "./models/expenseModel.js";
import User from "./models/userModel.js";

import sequelize from "./utils/database.js";
import authRoutes from "./routes/authRoutes.js";
import exprenseRoutes from "./routes/expenseRoutes.js";
import premiumRoutes from "./routes/premiumRoutes.js";



const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/auth", authRoutes);
app.use("/expense", exprenseRoutes);
app.use("/premium", premiumRoutes);

User.hasMany(Expense);
Expense.belongsTo(User);

sequelize.sync({ force: false }).then(async () => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Database connected server is running on port ${process.env.PORT}`
    );
  });
});
