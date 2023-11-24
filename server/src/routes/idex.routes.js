import { Router } from "express";
import roleRoutes from './auth/role-routes.js';

const router = Router();

router.use('/roles', roleRoutes);

export default router;