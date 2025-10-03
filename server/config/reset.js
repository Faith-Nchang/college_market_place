
import { pool } from './database.js';
import products from '../data/products.js';


const createProductsTable = async () => {
  const createTableQuery = `
  DROP TABLE IF EXISTS products;

  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    currency VARCHAR(10) NOT NULL,
    price_point VARCHAR(10) NOT NULL,
    category VARCHAR(100) NOT NULL,
    audience VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    seller_id INTEGER NOT NULL,
    submittedBy VARCHAR(255) NOT NULL,
    submittedOn TIMESTAMP NOT NULL
  );
  `;

  try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 products table created successfully')
  } catch (err) {
    console.error('⚠️ error creating products table', err)
  }
};

const seedGiftsTable = async () => {
  await createProductsTable()

  products.forEach((product) => {
    const insertQuery = {
      text: `INSERT INTO products 
        (title, description, price, currency, price_point, category, audience, image, location, seller_id, submittedBy, submittedOn) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`
    };
    const values = [
      product.title,
      product.description,
      product.price,
      product.currency,
      product.price_point,
      product.category,
      product.audience,
      product.image,
      product.location,
      product.seller_id,
      product.submittedBy,
      product.submittedOn
    ];
    pool.query(insertQuery, values, (err) => {
      if (err) {
        console.error('⚠️ error inserting product', err);
        return;
      }
      console.log(`✅ ${product.title} added successfully`);
    });
  });
}

seedGiftsTable();