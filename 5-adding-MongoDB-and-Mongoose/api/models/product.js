/* eslint-disable */

const mongoose = require('mongoose');

// mongoose.Schema.Types.ObjectId is used for declaring paths in your schema that should be MongoDB ObjectIds.
// A MongoDB ObjectId is a 12-byte unique identifier that contains:
// 4 byte timestamp value
// a 5 byte random value
// 3 byte incrementing counter
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

// Export schema as a model
module.exports = mongoose.model('Product', productSchema);