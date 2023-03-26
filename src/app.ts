import mainRouter from "./routes";
// import sequelize from "./db/database";
import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

const PORT = process.env.PORT || 1313;

const app = express();

app.use(express.json());

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
