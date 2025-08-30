import express from "express";
import dotenv from "dotenv";
import helloRouter from "./routes/hello.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Routes
app.use("/hello", helloRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
