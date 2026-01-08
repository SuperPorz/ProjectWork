/* 
SERVER SIDE LOGIC
*/

import express from 'express';
import { getOrders, getSpecificOrder, placeOrder } from './db/database.js';

// declare a var. that call the library's main function
const app = express();

//json API -> the req.body will be forced to be a valid JSON
app.use(express.json());

/*///////////////// ROUTES //////////////////////*/
// homepage
app.get('/', (req, res) => {
    res.send('Welcome to ProjectWork\'s Homepage!');
});

// orders list (GET request)
app.get('/orders', async (req, res) => {
    const data = await getOrders();
    res.send(data);
});

// get a specific order (GET request)
app.get('/orders/:id', async (req, res) => {
    const id = req.params.id;
    const data = await getSpecificOrder(id);
    res.send(data);
});

// add new order (POST request)
app.post('/orders', async (req, res) => {
    const {customer, product, quantity} = req.body;
    const order = await placeOrder(customer,product,quantity);
    res.status(201).send('New order successfully added!');
});

/*/////////////////// USE AND LISTEN /////////////////////*/
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

// let the app be ready to listen the requests on the specified port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});