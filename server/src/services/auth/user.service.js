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
const GetUserByUsernameService = async ( username ) => {
    try {

        //Validamos que se haya ingresado un username existente
        if(!username){
            //Retornamos el valor 1 para notificar que no se ha agregado un username no valido
            return 1;
        }

        const user = await UserRepositories.GetUserByUsername(username);

        if(!user){
            //Retornamos el valor 2 para notificar que el username existe
            return 2;
        }




    } catch (error) {
        console.log(error);
    }
}

export default {
    PostUserService,
    GetAllUserService,
    GetUserByIDService,
    GetUserByUsernameService
}