module.exports = () => {
    query: query
}

const mySql = require('mysql');

let connection = null;

function initConnection() {
    connection = mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'database'
    });
}

function query(queryString, cb) {
    initConnection();

    connection.connect;

    connection.query(queryString, (error, results, fields) => {
        //console.log(error, results);
        connection.end();
        cb(createDataResponseObject(error, results));
    })
}

function createDataResponseObject(error, results) {
    return {
        error: error,
        results: results === undefined ? null : results === null ? null : results
    }
}