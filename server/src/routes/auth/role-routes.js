import RoleController from '../../controllers/auth/role-controller.js'
import { Router } from 'express';

const router= Router();

router.post('/', RoleController.CreateRoleController);

export default router;