/* 
DATABASE LOGIC
*/


import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

//pool: ready to scale pool of connections
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

/* const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'userphp',
    password: 'admin',
    database: 'projectwork'
}); */

/*//////////////// CRUD OPERATIONS ////////////////////*/

//get ALL the orders
export async function getOrders() {
    const [rows] = await pool.query(`
        SELECT * 
        FROM orders
        `);
    return rows;
}

//get ONE specific order
export async function getSpecificOrder(id) {
    const [rows] = await pool.query(`
        SELECT * 
        FROM orders 
        WHERE id = ?
        `, [id]);//prepared statement
    return rows[0];//returning first row will return an object and not an array
}

//insert a NEW ORDER
export async function placeOrder(customer, product, quantity) {
    const date = new Date().toJSON().slice(0, 10);
    const [rows] = await pool.query(`
        INSERT INTO orders 
        (customer, product, quantity, order_date) 
        VALUES 
        (?, ?, ?, ?);
        `, [customer, product, quantity, date]);//prepared statement
    return rows[0];//returning first row will return an object and not an array
}

//delete an ORDER
export async function deleteOrder(id) {
    const [result] = await pool.query(`
    DELETE FROM orders
    WHERE id = ?;
    `, [id]);
        
    // if atleast 1 row is affected, then operation succeded
    if (result.affectedRows > 0) {
        return { 
            success: true, 
            message: "Order deleted successfully",
            affectedRows: result.affectedRows 
        };
    } else {
        return { 
            success: false, 
            message: "Failed to delete order",
            affectedRows: 0 
        };
    }
}