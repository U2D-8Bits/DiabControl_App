import { Router } from "express";
import roleRoutes from './auth/role.routes.js';
import userRoutes from './auth/user.routes.js';

const router = Router();

router.use('/roles', roleRoutes);
router.use('/users', userRoutes);


export default router;