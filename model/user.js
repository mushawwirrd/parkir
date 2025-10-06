import connection from "./connection.js";
import { DataTypes } from "sequelize";

const users = connection.define('users', {
    email : DataTypes.STRING,
    username : DataTypes.STRING,
    password : DataTypes.STRING
}, {timestamps : false, tableName : 'user'})

export default users