import { sequelize } from '../../database/postgres.js';
import { DataTypes } from 'sequelize';
import { Role } from '../auth/role.model.js';

export const User = sequelize.define('tb_user', {
    int_id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    str_username_user: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    str_password_user: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    str_name_user: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    str_lastname_user: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    str_email_user: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    str_phone_user: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    int_id_role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: Role.int_id_role,
        }
    }

},
//Schema
{
    schema: 'auth',
    timestamps: false,
    freezeTableName: true,
}   
); 