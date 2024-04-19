import { User } from '../../models/auth/user.model.js';
import { Op } from "sequelize";

// Metodo para crear un usuario
const PostUser = async ( name, lastname, username, password, email, phone, idRol) => {

    try {
    
        const user = await User.create({
            str_username_user: username,
            str_password_user: password,
            str_name_user: name,
            str_lastname_user: lastname,
            str_email_user: email,
            str_phone_user: phone,
            int_id_role: idRol
        })

        return user;

    } catch (error) {
        console.log(error); 
    }

}

//Metodo para obtener un usuario por el id (Finalizada
const GetUserByID = async ( id ) => {
    try {

        const user = await User.findOne({
            where: {
                int_id_user: id
            }
        });

        return user;
        
    } catch (error) {
        console.log(error);
    }
}

//Metodo para obtener un usuario por el username
const GetUser = async ( userData ) => {
    try {

        const user = await User.findAll({
            where: {
                [Op.or]: [
                    {
                        str_username_user: {
                            [Op.iLike]: `%${userData}%`
                        }
                    },
                    {
                        str_email_user: {
                            [Op.iLike]: `%${userData}%`
                        }
                    },
                    {
                        str_phone_user: {
                            [Op.iLike]: `%${userData}%`
                        }
                    }
                ]
            }
        });
        console.log('User found:', user);
        return user;
        
    } catch (error) {
        console.log(error.message);
    }
}


//Vaalidacion para encontrar un usuario
const userByUsername = async (username) => {
    try {
        const user = await User.findOne({
            where: {
                str_username_user: username
            }
        });
        return user;
    } catch (error) {
        console.log(error);
    }
}

const userByPassword = async (password) => {
    try {
        const user = await User.findOne({
            where: {
                str_password_user: password
            }
        });
        return user;
    } catch (error) {
        console.log(error);
    }

}



//Metodo para obtener todos los usuarios 
const GetAllUsers = async () => {
    try {

        const users = await User.findAll();
        return users;
        
    } catch (error) {
        console.log(error);
    }
}


//Metodo para actualizar un usuario por ID
const UpdateUserByID = async ( id, name, lastname, username, password, email, phone, idRol ) => {
    try {
        
    } catch (error) {
        
    }
}

//Metodo para eliminar un usuario por ID
const DeleteUserByID = async ( id ) => {
    try {
        
    } catch (error) {
        
    }
}




export default {
    PostUser,

    GetUser,

    GetAllUsers,

    GetUserByID,

    UpdateUserByID,

    DeleteUserByID,

    userByUsername,

    userByPassword
};