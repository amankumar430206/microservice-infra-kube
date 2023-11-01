import { Router } from "express";
const router = Router();

router.post("/login", (req, res) => {
  res.json({
    name: "logged in as Aman",
  });
});

export { router as LoginRouter };
