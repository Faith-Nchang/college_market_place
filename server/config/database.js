import pg from 'pg'

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: { rejectUnauthorized: false }
};

// Debug: print loaded env variables
console.log('PGUSER:', process.env.PGUSER);
console.log('PGDATABASE:', process.env.PGDATABASE);
console.log('PGHOST:', process.env.PGHOST);
console.log('PGPORT:', process.env.PGPORT);

export const pool = new pg.Pool(config)
