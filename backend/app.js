import express from "express";
import cors from "cors";

import sequelize from "./utils/database.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

sequelize.sync({ force: false }).then(async () => {
  app.listen(5000, () => {
    console.log("Database connected server is running on port 5000");
  });
});
