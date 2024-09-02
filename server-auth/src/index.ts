import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.json("Hello world, good");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
