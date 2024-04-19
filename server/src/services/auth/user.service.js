import { User } from '../../models/auth/user.model.js';
import UserRepositories from '../../repositories/postgres/user-pg.repository.js';

// Metodo para crear un usuario
const PostUserService = async ( name, lastname, username, password, email, phone, idRol ) => {

    try {
        
        //Validar que lleguen todos los datos
        if(!name || !lastname || !username || !password || !email || !phone || !idRol){
            //Retornamos el valor 1 para notificar que no han llegado todos los datos
            return 1;
        }

        //Validar si existe el username
        const existUsername = await UserRepositories.GetUserByUsername(username);
        if(existUsername){
            //Retornamos 2 porque ya existe el usuario con el username que llega
           return 2;
        }

        //Validar si existe el email
        const existEmail = await UserRepositories.GetUserByEmail(email);
        if(existEmail){
            //Retornamos 3 porque ya existe el usuario con el email que llega
           return 3;
        }

        //Validar si existe el phone
        const existPhone = await UserRepositories.GetUserByPhone(phone);
        if(existPhone){
            //Retornamos 4 porque ya existe el usuario con el phone que llega
           return 4;
        }

        //Crear el usuario si el username llega
        const user = await UserRepositories.PostUser(name, lastname, username, password, email, phone, idRol);
        console.log("Valor de user en Repository =>", user);
        //Notificacion de que el usuario se no creo
        if(!user){
            //Retorno un valor 5 que significa de que el usuario no se creo x algun error
            return 5;
        }

        return user;
        

    } catch (error) {
        console.log(error);
    }

}

//Metodo para validar el numero de telefono del usuario
const ValidatePhoneNumber = async (phone) => {

}

// Metodo para obtener todos los usuarios
const GetAllUserService = async () => {
    try {
        //Obtener todos los usuarios
        const users = await UserRepositories.GetAllUsers();
        return users;

    } catch (error) {
        console.log(error);
    }
}

//Metodo para obtener un usuario por ID

const GetUserByIDService = async ( id ) => {
    try {
        
        //Validamos que se haya ingresado un idUsuario existente
        if(!id){
            //Retornamos el valor 1 para notificar que no se ha agregado un idUsuario no valido
            return 1;
        }

        const existUser = await UserRepositories.GetUserByID(id);
        if(!existUser){
            //Retornamos el valor 2 para notificar que el idUsuario no existe
            return 2;
        }

        const user = await UserRepositories.GetUserByID(id);
        return user;

    } catch (error) {
        console.log(error);
    }
}

//Metodo para obtener un usuario por username
const GetUserService = async ( userData ) => {
    try {

        //Validamos que se haya ingresado un username existente
        if(!userData){
            //Retornamos el valor 1 para notificar que no se ha agregado un valor valido
            return 1;
        }

        const existUserData = await UserRepositories.GetUser(userData);
        console.log('existUserData:', existUserData);

        if(!existUserData){
            //Retornamos el valor 2 para notificar que el username no existe
            return 2;
        }

        //Retornamos el valor ${existUserName} para notificar que el username existe
       return existUserData;
        

    } catch (error) {
        console.log(error.message);
    }
}

//Metodo para obtener usuario por email
const GetUserByEmailService = async ( email ) => {
    try {
        
        if(!email){
            //Retornamos el valor 1 para notificar que no se ha agregado un email no valido
            return 1;
        }

        const existEmail = await UserRepositories.GetUserByEmail(email);
        if(existEmail){
            //Retornamos el valor 2 para notificar que el email existe
            return 2;
        }

        return existEmail;

    } catch (error) {
        console.log(error);
    }
}

//Metodo para obtener usuario por phone
const GetUserByPhoneService = async (phone) => {
    try {

        //Validamos que el numero de telefono tenga 10 digitos
        if(phone.length != 10){
            return 1;
        }
        
        //Validamos que el numero de telefono sea un numero
        if(isNaN(phone)){
            return 2;
        }

        //Validamos que el numero de telefono no sea negativo
        if(phone < 0){
            return 3;
        }

        //Validamos que los dos primeros digitos sean 0 y 9
        if(phone.substring(0,2) != "09"){
            return 4;
        }

        const existPhone = await UserRepositories.GetUserByPhone(phone);
        if(existPhone){
            return 5;
        }

        return existPhone;

    } catch (error) {
        console.log(error);
    }
}


const PostLoginService = async (userData) => {
    try {

        if(!userData){
            //Retornamos el valor de 1 
            return {
                status: false,
                message: 'Campos no cumplen los valores requeridos',
                body: [],
            };
        }

        const {username, password} = userData;

        //Validamos que el nombre de usuarioo sea valido
        const userName = await UserRepositories.userByUsername(username)

        if(!userName){
            return {
                status: false,
                message: 'El nombre de usuario no es valido',
                body: [],
            };

        }

        const userPassword = await UserRepositories.userByPassword(password);

        if(!userPassword){
            return {
                status: false,
                message: 'La contraseña no es valida',
                body: [],
            };

        }

        return {
            status: true,
            message: 'Usuario logeado correctamente',
            body: [],
        };


    } catch (error) {
        console.log(error.message);
    }
}


export default {
    PostUserService,
    GetAllUserService,
    GetUserByIDService,
    GetUserService,
    GetUserByEmailService,
    GetUserByPhoneService,


    PostLoginService,

    //Validaciones
    ValidatePhoneNumber,
}