import mysql from 'mysql2';

//pool: ready to scale pool of connections
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'userphp',
    password: 'admin',
    database: 'projectwork'
}).promise();

/* const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'userphp',
    password: 'admin',
    database: 'projectwork'
}); */

//query the Db with async/await function
const result = await pool.query("SELECT * FROM orders");

//take only the data rows needed
const rows = result[0];

//print the rows on console.log
console.log(rows);