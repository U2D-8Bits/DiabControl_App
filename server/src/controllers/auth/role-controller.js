import RoleService from '../../services/auth/role.service.js'

// Metodo para crear un rol
const CreateRoleController = async (req, res) => {

    try {
        const { roleName } = req.body;
        console.log("Llega a Rolname =>",roleName);
        const role = await RoleService.CreateRoleService(roleName);

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
                message: "Surgió un error al crear el rol",
                body:[],
            });
        }

        if( role === 3){
            return res.status(400).json({
                status: false,
                message: "Se requiere un nombre de rol válido",
                body:[],
            });
        }

        if(role){
            res.status(200).json({
                status: true,
                message: "El rol se creo correctamente",
                body:role,
            })
        }

        

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

        const roles = await RoleService.GetAllRolesService();

        if(!roles){
            return res.status(400).json({
                status: false,
                message: "No se obtuvieron roles",
                body:[],
            });
        }

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
        const role = await RoleService.GetRoleByIDService(idRol)
    
        if(role === 1){
            return res.status(400).json({
                status: false,
                message: "El id de rol ingresado no es válido",
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

//Metodo para actualizar un rol por el ID
const UpdateRoleByIDController = async (req, res) => {
    try {
        const { idRol } = req.params;
        const { roleName} = req.body;



        const role = await RoleService.UpdateRoleByIDService(idRol,roleName);

        if(role === 1){
            return res.status(400).json({
                status: false,
                message: "El id de rol ingresado no es válido",
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

        if(role === 3){
            return res.status(400).json({
                status: false,
                message: "El rol no se actualizo",
                body:[],
            });
        }

        res.status(200).json({
            status: true,
            message: "El rol se actualizo correctamente",
            body:[],
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body:[],
        });
    }
} 

//Metodo para eliminar un usuario por el ID
const DeleteRoleByIDController = async (req, res) => {
    try {

        const { idRol } = req.params;

        const role = await RoleService.DeleteRoleByIDService(idRol);

        if(role === 1){
            return res.status(400).json({
                status: false,
                message: "El id de rol ingresado no es válido",
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

        if(role === 3){
            return res.status(400).json({
                status: false,
                message: "El rol no se elimino",
                body:[],
            });
        }

        res.status(200).json({
            status: true,
            message: "El rol se elimino correctamente",
            body:[],
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
    UpdateRoleByIDController,
    DeleteRoleByIDController
}