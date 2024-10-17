const Product = require('../models/productModel.js')
const getAllProduct = async (req, res) => {
    const product = await Product.find()
    if (!product) {
        return res.status(404).send("product is not found")
    }
    res.status(200).send(product)
}

const addProduct = async (req, res) => {
    const addProduct = new Product(req.body)
    try {
        await addProduct.save();
        res.status(201).send(addProduct)
    } catch (err) {
        res.status(400).send(`some issue in adding product ${err}`)
    }
}

module.exports = { getAllProduct, addProduct }