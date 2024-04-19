import { Role } from '../../models/auth/role.model.js';

// Create a new role
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
                str_name_role:roleName
            }
        });

        return role;

    } catch (error) {
        console.log(error);
    }

}


// Get a role by id
const GetRoleByID = async ( idRol ) => {
    try {
        
        const role = await Role.findOne({
            where:{
                int_id_role:idRol
            }
        });

        return role;

    } catch (error) {
        console.log(error);
    }
}

// Get all the roles
const GetAllRoles = async () => {
    try {
        
        const roles = await Role.findAll();

        return roles;

    } catch (error) {
        console.log(error)
    }
}

// Update the role by ID
const UpdateRoleByID = async ( idRol, roleName ) => {
    try {
        
        const updateRole = await Role.update({
            str_name_role: roleName
            },
            {
            where:{
                int_id_role:idRol
        }});

        console.log("Repository =>",updateRole);
        return updateRole;

    } catch (error) {
        console.log(error);
    }
}

// Delete the role by ID
const DeleteRoleById = async ( idRol ) => {
    try {
        const destroyRole = await Role.destroy({
            where:{
                int_id_role:idRol
            }
        });

        return destroyRole;

    } catch (error) {
        console.log(error);
    }
}



export default {
    CreateRole,
    GetRoleByID,
    GetAllRoles,
    UpdateRoleByID,
    DeleteRoleById,
    GetRoleByName
};