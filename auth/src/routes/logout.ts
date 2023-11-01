import { Router } from "express";
const router = Router();

router.post("/logout", (req, res) => {
  res.json({
    name: "logged in as Aman",
  });
});

export { router as LogoutRouter };
