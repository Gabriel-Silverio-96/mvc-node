const mysql = require('mysql');
const connection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'database'
    });
};

module.exports = () => {
    return connection
}