var pg = require("pg")

require('dotenv').config({ path:'variables.env' });

const conectarDB = async () => {
    try {
        const connectionString = process.env.DB_POSTGRESQL
        var client = new pg.Client(connectionString);
        await client.connect();
        console.log('DB Conectada')
       
    } catch (error) {
        console.log(error)
        process.exit(1);//Detener la app
    }
}
module.exports = conectarDB;
// var connectionString = "pg://postgres:postgres@localhost:5432/students";