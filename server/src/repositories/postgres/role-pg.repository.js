import { Role } from '../../models/auth/role.model.js';

const CreateRole = async ( roleName )=> {
    try {

        const role = await Role.create({
            str_name_role: roleName
        })

        return role;
        
    } catch (error) {
        // console
        console.log("El rol no se creo");
    }
}

const GetRoleByName = async ( roleName ) => {

    try {

        const role = await Role.findOne({
            where:{
                str_name_role: roleName
            }
        })

        return role;
        
    } catch (error) {
        console.log(error)
    }
}


const GetRole = async ( idRol ) =>{
    try {
        
        const role = await Role.findOne({
            where:{
                int_id_role:idRol
            }
        })

        return role;

    } catch (error) {
        console.log(error)
    }
}



export default {
    CreateRole,
    GetRole,
    GetRoleByName
};