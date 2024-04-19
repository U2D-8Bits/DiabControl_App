import { sequelize } from '../../database/postgres.js';
import { DataTypes } from 'sequelize';

export const Role = sequelize.define('tb_role',{
    int_id_role:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    str_name_role:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
},

//Schema
{
    schema: 'auth',
    timestamps: false,
    freezeTableName: true,
}

)


