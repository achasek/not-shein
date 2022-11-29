const Order = require('../../models/order');

module.exports = {
    cart,
}

async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}