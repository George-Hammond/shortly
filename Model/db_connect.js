const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '3-evolheeG',
    port: 5432,
    database: 'shortly_url'
})

module.exports = pool; 