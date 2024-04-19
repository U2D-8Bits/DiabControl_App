import app from './app.js';
import { configVariables } from './config/variables.config.js';
import { sequelize } from './database/postgres.js';

//Import de las tablas que se desea crear


async function main( port ){
    try {
        
        //Conexion a base de datos
        await sequelize.authenticate();
        await sequelize.sync({
            //Se declara false para que no se creen las tablas cada que se ejecuta el servidor
            force: false,
            //Se declara false para que no aparezca en consola de datos
            logging: true,
        });

        //Se levanta el servidor y anuncia el puerto en el que corre
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    } catch (error) {
        console.log(error);
    }
}

main(configVariables.port);
