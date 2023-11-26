import { Router } from "express";
import UserController from '../../controllers/auth/user-controller.js';
const router = Router();

//Ruta para obtener todos los usuarios
router.get('/', UserController.GetAllUsersController);
//Ruta para obtener el usuario por ID
router.get('/:id', UserController.GetUserByIDController);
//Ruta para obtener el usuario por username
router.get('/:username', UserController.GetUserByUsernameController);
//Ruta para obtener el usuario por email
router.get('/:email');

export default router;