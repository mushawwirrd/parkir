import connection from "./connection.js";
import { DataTypes } from "sequelize";
import users from "./user.js";


const parkir = connection.define ("parkir", {
    user_id : {
        type : DataTypes.INTEGER,
        references : "users",
        key : "id"
    },
    duration : DataTypes.INTEGER,
    total : DataTypes.INTEGER,
    nopol : DataTypes.STRING
}, {timestamps : false, tableName : "parkir"})

parkir.belongsTo(users, {targetKey : "id", foreignKey : "user_id"})

export default parkir