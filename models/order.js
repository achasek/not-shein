const mongoose = require('mongoose')
const itemSchema = require('./itemSchema')
const Schema = mongoose.Schema

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    item: itemSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

lineItemSchema.virtual('extWaterPrice').get(function() {
    return this.qty * this.item.waterPrice
})

lineItemSchema.virtual('extCarbonPrice').get(function() {
    return this.qty * this.item.carbonPrice
})

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

orderSchema.virtual('waterTotal').get(function() {
    return this.lineItems.reduce((total, item) => total + item.extWaterPrice, 0)
})

orderSchema.virtual('carbonTotal').get(function() {
    return this.lineItems.reduce((total, item) => total + item.extCarbonPrice, 0)
})

orderSchema.virtual('totalQty').get(function() {
    return this.lineItems.reduce((total, item) => total + item.qty, 0)
})

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    )
}

module.exports = mongoose.model('Order', orderSchema);