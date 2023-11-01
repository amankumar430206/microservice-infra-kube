import { Router, Request, Response } from "express";
const router = Router();

router.get("/currentuser", (req: Request, res: Response) => {
  res.json({
    name: "logged in as Aman",
  });
});

export { router as currentUserRouter };
