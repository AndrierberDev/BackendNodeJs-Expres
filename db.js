const mysql = require('mysql');

const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTIO_LOST'){
            console.error("No se conecto")
        }
    }

    if(connection) connection.release();
    console.log("Se conecto correctamente");
    return;
})

module.exports = pool;