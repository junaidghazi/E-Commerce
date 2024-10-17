const express=require('express')
const {getAllProduct,addProduct}=require('../controller/productController.js')
const router=express.Router()
const apiVersion = process.env.API_VERSION; 

router.get(`${apiVersion}/products`, getAllProduct)
router.post(`${apiVersion}/products`, addProduct)

module.exports=router;