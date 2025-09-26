import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import products from "../data/products.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Serve 404 page
router.get('/404', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'));
});

// Get all products (JSON)
router.get('/', (req, res) => {
  res.status(200).json(products);
});

// Get single product data (JSON)
router.get('/:productId/data', (req, res) => {
  const productId = parseInt(req.params.productId, 10);
  const product = products.find(p => p.id === productId);

  if (!product) return res.status(404).json({ error: 'Product not found' });

  res.status(200).json(product);
});

// Serve product page
router.get('/:productId', (req, res) => {
  const productId = parseInt(req.params.productId, 10);
  const product = products.find(p => p.id === productId);

  if (!product) return res.redirect('/products/404');

  res.sendFile(path.resolve(__dirname, '../public/product.html'));
});

export default router;
