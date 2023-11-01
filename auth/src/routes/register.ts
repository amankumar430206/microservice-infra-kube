import { Router } from "express";
const router = Router();

router.post("/register", (req, res) => {
  res.json({
    name: "logged in as Aman",
  });
});

export { router as RegisterRouter };
