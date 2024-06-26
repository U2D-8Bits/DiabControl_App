import userService from "../../services/auth/user.service.js";

// Metodo para crear un usuario
const PostUserController = async (req, res) => {
    try {

        const { name, lastname, username, password, email, phone, idRol } = req.body;

        console.log("Contenido que llega a Controller=>", name, lastname, username, password, email, phone, idRol);

        const user = await userService.PostUserService(name, lastname, username, password, email, phone, idRol);
        console.log("Valor de user en Controller =>", {user})

        const val = 0;


        if(user === 1){
            return res.status(400).json({
                status: false,
                message: "Existen datos faltantes",
                body:[],
            });
        }

        if(user === 2){
            return res.status(400).json({
                status: false,
                message: "El nombre de usuario ingresado ya existe",
                body:[],
            });
        }

        if(user === 3){
            return res.status(400).json({
                status: false,
                message: "El email ingresado ya existe",
                body:[],
            });
        }

        //Validaciones de numero de telefono
        const userPhone = await userService.GetUserByPhoneService(phone);
        console.log("Valor de userPhone en Controller =>", userPhone);

        if( userPhone === 1 ){
            return res.status(400).json({
                status: false,
                message: "El telefono requiere ser de 10 digitos",
                body:[],
            });
        }

        if( userPhone === 2){
            return res.status(400).json({
                status: false,
                message: "El telefono no es valido",
                body:[],
            });
        }

        if( userPhone === 3){
            return res.status(400).json({
                status: false,
                message: "El telefono no es valido",
                body:[],
            });
        }

        if( userPhone === 4){
            return res.status(400).json({
                status: false,
                message: "El telefono ingresado no tiene un formato valido",
                body:[],
            });
        }

        if( userPhone === 5){
            return res.status(400).json({
                status: false,
                message: "El telefono ingresado ya existe",
                body:[],
            });
        }
        

        if(user === 4){
            return res.status(400).json({
                status: false,
                message: "El telefono ingresado ya existe xd",
                body:[],
            });
        }

        if(user === 5){
            return res.status(400).json({
                status: false,
                message: "El usuario no se pudo crear",
                body:[],
            });
        }

        if( val === 0){
            res.status(200).json({
                status: true,
                message: "El usuario se creo correctamente",
                body:[],
            })
        }

        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body:[],
        })
    }
}

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

//Metodo para obtener el usuario por username
const GetUserController = async ( req, res) => {
    try {

        const { userData } = req.body;
        const user = await userService.GetUserByUsernameService(userData);

        if(user === 1){
            return res.status(400).json({
                status: false,
                message: "El nombre de usuario ingresado no es válido",
                body:[],
            })
        }

        if(user === 2){
            return res.status(400).json({
                status: false,
                message: "El nombre de usuario no existe",
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

//Metodo para obtener el usuario por email
const GetUserByEmailController = async ( req, res) => {
    try {

        const { email } = req.params;
        const userEmail = await userService.GetUserByEmailService(email);

        if(userEmail === 1){
            return res.status(400).json({
                status: false,
                message: "El email ingresado no es válido",
                body:[],
            })
        }

        if(userEmail === 2){
            return res.status(400).json({
                status: false,
                message: "El email ingresado ya existe",
                body:[],
            })
        }

        res.status(200).json({
            status: true,
            message: "El usuario se obtuvo correctamente",
            body:userEmail,
        })


        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body:[],
        })
    }
}

//Metodo para obtener el usuario por phone
const GetUserByPhoneNumberController = async ( req, res) => {
    try {

        const { phone } = req.params;
        const userPhone = await userService.GetUserByPhoneService(phone);
        console.log("Valor de UserPhone en controller =>",userPhone);

        if(userPhone === 1){
            return res.status(400).json({
                status: false,
                message: "El telefono requiere ser de 10 digitos",
                body:[],
            })
        }

        if(userPhone === 2){
            return res.status(400).json({
                status: false,
                message: "El telefono ingresado no es válido",
                body:[],
            })
        }

        if( userPhone === 3){
            return res.status(400).json({
                status: false,
                message: "El telefono ingresado no es válido",
                body:[],
            })
        }

        if(userPhone === 2){
            return res.status(400).json({
                status: false,
                message: "El telefono registrado ya existe",
                body:[],
            })
        }


        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body:[],
        })
    }
}



//Metodo para login
const PostLoginController = async ( req, res) => {
    try {

        const { userData } = req.body;

        console.log("Valor que llega a Controller Login =>",req.body)


        const user = await userService.PostLoginService(userData);

        res.json(user);
        
        console.log("Respuesta de com =>", res.json(user));

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
    GetUserByIDController,
    GetUserByEmailController,
    GetUserByPhoneNumberController,
    PostUserController,
    GetUserController,


    PostLoginController
}