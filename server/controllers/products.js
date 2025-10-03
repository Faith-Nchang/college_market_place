import { pool } from '../config/database.js'


const getProducts = async (req, res) => {

    try {

        const result = await pool.query('SELECT * FROM products');
        res.status(200).json(results.rows)
    } catch {
        res.status(409).json( { error: error.message } )
    }
} 

export default { getProducts }