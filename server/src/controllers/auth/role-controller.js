import RoleService from '../../services/auth/role.service.js'

// Metodo para crear un rol
const CreateRoleController = async (req, res) => {

    try {
        const { roleName } = req.body;
        console.log("Llega a Rolname =>",roleName);
        const role = await RoleService.CreateRole(roleName);

        if(role === 1){
            return res.status(400).json({
                status: false,
                message: "El rol ya existe",
                body:[],
            });
        }
        
        if(role === 2){
            return res.status(400).json({
                status: false,
                message: "Surgio un error al crear el rol",
                body:[],
            });
        }

        if( role === 3){
            return res.status(400).json({
                status: false,
                message: "Se requiere un nombre de rol valido",
                body:[],
            });
        }


        res.status(200).json({
            status: true,
            message: "El rol se creo correctamente",
            body:role,
        })
        

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body:[],
        });
    }

}

//Metodo para obtener todos los roles
const GetAllRolesController = async (req, res) =>{

    try {

        const roles = await RoleService.GetAllRoles();

        res.status(200).json({
            status: true,
            message: "Se obtuvieron todos los roles",
            body:roles,
        })
        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body:[],
        });
    }

}

//Metodo para obtener un rol por ID
const GetRoleByIDController = async (req, res) => {

    try {
        const { idRol } = req.params;
        console.log("Llega a idRol =>",idRol);
        const role = await RoleService.GetRoleByID(idRol)
    
        if(role === 1){
            return res.status(400).json({
                status: false,
                message: "El id de rol ingresado no es valido",
                body:[],
            });
        }
        
        if(role === 2){
            return res.status(400).json({
                status: false,
                message: "El idRol no existe",
                body:[],
            });
        }
    
        res.status(200).json({
            status: true,
            message: "El rol se obtuvo correctamente",
            body:role,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body:[],
        });
    }
}

export default {
    CreateRoleController,
    GetAllRolesController,
    GetRoleByIDController,
}