import express from 'express'
import Product from '../models/productModel.js'
import asyncHanlder from 'express-async-handler'
const router = express.Router()

// @desc Fetch all products
// @route  GET /api/products
// @access Public
router.get(
  '/',
  asyncHanlder(async (req, res) => {
    const products = await Product.find({})
    // res.status(401)
    // throw new Error('Not Authorized')
    res.json(products)
  })
)

// @desc Fetch single product
// @route  GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHanlder(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default router
