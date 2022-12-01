const mongoose = require('mongoose');
const Category = require('./category');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    waterPrice: {
        type: Number
    },
    carbonPrice: {
        type: Number
    },
    image: {
        type: String
    }
})

module.exports = itemSchema;