// Build express app and host on cloud function
// firebase emulators:start
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQvwyD2WNwr7ngMrdurQgNIoUjmhuq4fiqg1MC9El3b3F8MbpMdi4XLHijV1LhznJZmy6MjVN1jkuSVhgAE4wJe00DaRZD8Xg');

//API

//APP CONFIG
const app = express();

//MIDDLEWARES
app.use(cors({ origin: true }));
    //data sending in the Json format
app.use(express.json());

//API ROUTES
app.get('/',(request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request received for this amount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //sub-unit of the currency
        currency: 'USD',
    });

    // created okay
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

//LISTEN COMMAND
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-27d1c/us-central1/api