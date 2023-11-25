import RoleRepositories from '../../repositories/postgres/role-pg.repository.js';


// Metodo para crear un role
const CreateRole = async ( roleName ) => {
    try {

        //Validar si llega el roleName
        if(!roleName){
            //Retornamos el valor 3 para notificar que no se ha agregado un nombre valido
            return 3;
        }

        //Validar si existe el roleName
        const existRole = await RoleRepositories.GetRoleByName(roleName);
        if(existRole){
            //Retornamos 1 porque ya existe el rol con el nombre que llega
           return 1;
        }

        //Crear el rol si el roleName llega
        const role = await RoleRepositories.CreateRole(roleName);

        //Notificacion de que el rol se creo
        if(!role){
            //Retorno un valor 2 que significa de que el rol no se creo x algun error
            return 2;
        }

        return role;


    } catch (error) {
        console.log(error)
    }
}

//Metodo para obtener todos los roles
const GetAllRoles = async () =>{
    try {  
        //Obtener todos los roles
        const roles = await RoleRepositories.GetAllRoles();
        return roles;

    } catch (error) {
        console.log(error);
    }
}



// Metodo para obtener un rol por ID
const GetRoleByID = async ( idRol ) => {
    try {
        
        //Validamos que se haya ingresado un idRol existente
        if(!idRol){
            //Retornamos el valor 1 para notificar que no se ha agregado un idRol no valido
            return 1;
        }
        
        //Validamos que el idRol exista
        const existRole = await RoleRepositories.GetRoleByID(idRol);
        if(!existRole){
            //Retornamos el valor 2 para notificar que el idRol no existe
            return 2;
        }

        //Obtener el rol por ID
        const role = await RoleRepositories.GetRoleByID(idRol);
        return role;

    } catch (error) {
        console.log(error);
    }
}

export default {
    CreateRole,
    GetRoleByID,
    GetAllRoles,
}