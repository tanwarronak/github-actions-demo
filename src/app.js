import express from "express";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("we are good to go");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});