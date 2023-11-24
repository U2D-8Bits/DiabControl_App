import RoleRepositories from '../../repositories/postgres/role-pg.repository.js';

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

export default {
    CreateRole,
}