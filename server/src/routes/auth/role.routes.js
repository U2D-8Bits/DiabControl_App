import RoleController from '../../controllers/auth/role-controller.js'
import { Router } from 'express';

const router= Router();


// Route GET por ID del rol
router.get('/:id', RoleController.GetRoleByIDController);
// Route GET todos
router.get('/', RoleController.GetAllRolesController);
// Route post para crear un rol
router.post('/', RoleController.CreateRoleController);
// Route PUT para actualizar un rol por ID
router.put('/:id', RoleController.CreateRoleController);
// Route DELETE para eliminar un rol por ID
router.delete('/:id', RoleController.CreateRoleController);

export default router;