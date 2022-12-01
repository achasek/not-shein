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
        {name: 'Cotton T-Shirt', category: categories[0], waterPrice: 2700, carbonPrice: 22800, image: './public/images/shirt1.jpeg'},
        {name: 'Slim Fit Denim', category: categories[1], waterPrice: 3800, carbonPrice: 33400, image: './public/images/jeans1.jpeg'},
        {name: 'Regular Fit Denim', category: categories[0], waterPrice: 3900, carbonPrice: 33400, image: './public/images/jeans1.jpeg'},
        {name: 'Blouse', category: categories[1], waterPrice: 3000, carbonPrice: 23000, image: './public/images/jeans1.jpeg'},
    ])
    console.log(items)
    process.exit();
    
})();