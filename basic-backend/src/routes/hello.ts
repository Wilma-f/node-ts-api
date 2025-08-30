import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello, ES Modules+ TypeScript + Express!" });
});

export default router;
