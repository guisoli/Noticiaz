var mysql = require('mysql');

var conMySQL = function(){
        console.log('DB conectado');
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '1234567',
            database : 'portal_noticias'
    });
}

module.exports = function(){
    return conMySQL;
};
