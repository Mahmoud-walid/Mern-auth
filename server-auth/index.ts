import express from "express";
import dotenv from "dotenv";
import { connectDB_Mongo } from "./src/config/dbConfig";
import userRouter from "./src/routes/user.route";
import authRouter from "./src/routes/auth.route";
import { errorMiddleware } from "./src/middlewares/error.middleware";

dotenv.config({ path: "../.env" });

const port = process.env.PORT;

const app = express();

connectDB_Mongo();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server is running on http:/localhost:${port}`);
});
