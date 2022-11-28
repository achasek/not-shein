const Category = require('./models/category');
const Item = require('./models/item');

require('dotenv').config();
require('./config/database');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Mens', sortOrder: 10},
        {name: 'Womens', sortOrder: 20},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {name: 'Cotton T-Shirt', category: categories[0], waterPrice: '2,700 gallons of water', carbonPrice: '22,800 kilograms in carbon emissions', image: './public/images/shirt1.jpeg'},
        {name: 'Slim Fit Denim', category: categories[1], waterPrice: '3,800 gallons of water', carbonPrice: '33,400 kilograms in carbon emissions', image: './public/images/jeans1.jpeg'}
    ])

    process.exit();

})();