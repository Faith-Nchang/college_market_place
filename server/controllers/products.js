import { pool } from '../config/database.js'


const getProducts = async (req, res) => {

    try {

        const result = await pool.query('SELECT * FROM Products');
        res.status(200).json(results.rows)
    } catch {
        res.status(409).json( { error: error.message } )
    }
} 