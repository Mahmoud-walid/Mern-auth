import { Router } from "express";
import { test } from "../controllers/user.controller";

const router: Router = Router();

router.get("/", test);

export default router;
