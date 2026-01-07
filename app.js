// assign to a declared var. the rxpress library
const express = require('express');

// declare a var. that call a library's function, the main one
const app = express();

// let the app be ready to listen the requests, specifing the port
app.listen(3000);

/* ROUTES */
// homepage
app.get('/', (req, res) => {
    res.send('Welcome to ProjectWork\'s Homepage!');
});

// orders list (GET request)
app.get('/orders', (req, res) => {
    //implementa logica di conessione al DB
    const data = [

        {
            id: 25,
            customer: 'franco',
            product: 'pencil',
            quantity: 3,
            order_date: '02/01/2026'
        },
        {
            id: 29,
            customer: 'giuseppa',
            product: 'glasses',
            quantity: 1,
            order_date: '03/01/2026'
        },
        {
            id: 31,
            customer: 'matusalem',
            product: 'plastic bottle',
            quantity: 11,
            order_date: '04/01/2026'
        },
    ];

    //risposta al client con JSON dei dati fetchati dal DB
    res.send(data);
});

// add new order (POST request)
app.post('/orders', (req, res) => {
    //implementa logica di salvataggio dati POST inviati (id, customer, product...)

    //implementa logica di connessione al DB e inserimento dati

    //invia risposta di avvenuto inserimento dati nel DB
    res.send('New order successfully added!');
});