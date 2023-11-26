import userService from "../../services/auth/user.service.js";

// Metodo para crear un usuario

//Metodo para obtener todos los usuarios
const GetAllUsersController = async (req, res) => {
    try {
        const users = await userService.GetAllUserService();

        console.log('Users from UserController =>',users)

        //Validamos que si users es vacio o null nos notifique que no llegaron usuarios para mostrar
        if(!users){
            return res.status(400).json({
                status: false,
                message: "No hay usuarios para mostrar",
                body:[],
            })
        }


        res.status(200).json({
            status: true,
            message: "Se obtuvieron todos los usuarios",
            body:users,
        })

        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body:[],
        })
    }
}

//Metodo para obtener un usuario por ID
const GetUserByIDController = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await userService.GetUserByIDService(id);

        if(user === 1){
            return res.status(400).json({
                status: false,
                message: "El id de usuario ingresado no es válido",
                body:[],
            })
        }

        if(user === 2){
            return res.status(400).json({
                status: false,
                message: "El usuario no existe",
                body:[],
            })
        }

        res.status(200).json({
            status: true,
            message: "El usuario se obtuvo correctamente",
            body:user,
        })
        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body:[],
        })
    }
}

export default {
    GetAllUsersController,
    GetUserByIDController
}