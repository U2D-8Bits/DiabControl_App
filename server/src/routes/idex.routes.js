import { Router } from "express";
import roleRoutes from './auth/role.routes.js';
import userRoutes from './auth/user.routes.js';
import authRoutes from './auth/auth.routes.js';

const router = Router();

router.use('/roles', roleRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);



export default router;