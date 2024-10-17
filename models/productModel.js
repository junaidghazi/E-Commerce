const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: "String",
        require: true,
        trim: true
    },
    price: {
        type: "Number",
        require: true,
        min: 0
    },
    description: {
        type: "String",
        trim: true
    },
    category: {
        type: String,
        enum: ['hair', 'beauty', 'furniture', 'sports'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Product', productSchema);