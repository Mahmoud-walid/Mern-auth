import express from "express";
import dotenv from "dotenv";
import { connectDB_Mongo } from "./src/config/dbConfig";
dotenv.config({ path: "../.env" });

const port = process.env.PORT;

const app = express();

connectDB_Mongo();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello world, good");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
