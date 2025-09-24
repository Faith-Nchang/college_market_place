import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import products from "../data/products.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(products)
})

router.get('/:productId', (req, res) => {
  const productId = parseInt(req.params.productId, 10)
  const product = products.find(p => p.id === productId)

  if (!product) {
    // If product not found, serve 404 page
    return res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'))
  }

  // Serve product detail page
  res.status(200).sendFile(path.resolve(__dirname, '../public/product.html'))
})

export default router
