const Item = require('../../models/item')

module.exports = {
    index,
}

async function index(req, res) {
    const items = await Item.find({}).populate('category')
    res.json(items)
}