const Category = require('./models/category');
const Item = require('./models/item');
const Order = require('./models/order');

require('dotenv').config();
require('./config/database');

(async function() {
    await Order.deleteMany({});
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Mens', sortOrder: 10},
        {name: 'Womens', sortOrder: 20},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {name: 'Cotton T-Shirt', category: categories[0], waterPrice: 2700, carbonPrice: 22800, image: '/images/shirt2.jpeg'},
        {name: 'Slim Fit Denim', category: categories[1], waterPrice: 3800, carbonPrice: 33400, image: '/images/jeans2.jpeg'},
        {name: 'Regular Fit Denim', category: categories[0], waterPrice: 3900, carbonPrice: 33400, image: '/images/jeans3.jpeg'},
        {name: 'Blouse', category: categories[1], waterPrice: 3000, carbonPrice: 23000, image: '/images/blouse1.jpeg'},
        {name: 'Cream Loose Fit Hoodie', category: categories[0], waterPrice: 3400, carbonPrice: 28000, image: '/images/hoodie1.jpeg'},
        {name: 'Earth Crew Neck Pullover', category: categories[0], waterPrice: 3500, carbonPrice: 29000, image: '/images/sweater1.jpeg'},
        {name: 'Loose Fit Denim', category: categories[1], waterPrice: 3900, carbonPrice: 33400, image: '/images/jeans4.jpeg'},
        {name: 'Oversized Puffer Jacket', category: categories[0], waterPrice: 5900, carbonPrice: 52000, image: '/images/jacket1.jpeg'},
        {name: 'Sequin Dress', category: categories[1], waterPrice: 4400, carbonPrice: 38000, image: '/images/dress1.jpeg'},
        {name: 'Flare Denim', category: categories[1], waterPrice: 3800, carbonPrice: 33400, image: '/images/jeans5.jpeg'},
        {name: 'Tan Joggers', category: categories[1], waterPrice: 3500, carbonPrice: 32000, image: '/images/joggers1.jpeg'},
        {name: 'Nylon Lace Shirt', category: categories[1], waterPrice: 4200, carbonPrice: 40000, image: '/images/blouse2.jpeg'},
        {name: '2-pack Tank Top', category: categories[0], waterPrice: 5400, carbonPrice: 45600, image: '/images/shirt3.jpeg'},
    ])
    console.log(items)
    process.exit();
    
})();