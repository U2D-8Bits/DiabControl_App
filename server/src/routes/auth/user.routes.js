import { Router } from "express";
import UserController from '../../controllers/auth/user-controller.js';
const router = Router();

//Ruta para obtener todos los usuarios
router.get('/', UserController.GetAllUsersController);

//Ruta para obtener el usuario por ID
router.get('/:id', UserController.GetUserByIDController);

//Ruta general
router.get('/getUser', UserController.GetUserController);


//Ruta para crear un usuario
router.post('/', UserController.PostUserController);

//Ruta para modificar un usuario por ID

//Ruta para bloquear un usuario por ID

//Ruta para eliminar un usuario por ID

export default router;