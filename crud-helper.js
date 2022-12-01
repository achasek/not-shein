// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;

// ------- DRAFT FOR STRIPE IMPLEMENTATION ------ //
// const stripe = require('stripe')(process.env.SECRET_KEY);

// app.post('/checkout', async (req, res) => {


//     const items = req.body.items;
//     let lineItems = [];
//     items.forEach((item) => {
//         lineItems.push(
//             {
//                 price: item.id,
//                 quantity: item.quantity // change to qty later maybe 
//             }
//         )
//     });

//     const session = await stripe.checkout.sessions.create({
//         line_items: lineItems,
//         mode: 'payment', 
//         success_url: 'http://localhost:3000',
//         cancel_url: 'http://localhost:3000'
//     });


//     res.send(JSON.stringify({
//         url: session.url
//     }))
// })