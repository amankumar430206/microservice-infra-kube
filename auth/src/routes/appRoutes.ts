import { Router } from "express";
import { currentUserRouter } from "./currentUser";
import { LoginRouter } from "./login";
import { LogoutRouter } from "./logout";
import { RegisterRouter } from "./register";

const router = Router();

router.use(currentUserRouter);
router.use(LoginRouter);
router.use(LogoutRouter);
router.use(RegisterRouter);

export { router as AppRoutes };
