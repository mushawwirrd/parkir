import { Sequelize } from "sequelize";

const connection = new Sequelize('parkir', 'root', '071Januarii!', {
    host : 'localhost',
    dialect : 'mysql'

})

export default connection