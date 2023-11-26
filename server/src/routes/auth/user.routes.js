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
router.get('/:email', UserController.GetUserByEmailController);
//Ruta para obtener el usuario por phone
router.get('/:phone', UserController.GetUserByPhoneNumberController);
//Ruta para crear un usuario
router.post('/', UserController.PostUserController);

export default router;