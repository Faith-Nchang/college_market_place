import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import productsRouter from './routes/products.js'
import './dotenv.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()

// Serve static files from the client/public directory (Vite build output)
app.use(express.static(path.resolve(__dirname, '../client/public')))

// API routes
app.use('/products', productsRouter)

// Serve 404.html directly for /404
app.get('/404', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/404.html'));
});

// Home page (serves index.html from client/public)
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})