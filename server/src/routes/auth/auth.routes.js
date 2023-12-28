import { Router } from "express";
import UserController from '../../controllers/auth/user-controller.js';

const router = Router();

router.post('/login', UserController.PostLoginController)

export default router;
