const Pool = require('pg-pool')

const pool = new Pool({
    user: 'postgres',
    password: 'timober21',
    host: 'localhost',
    port: '5432',
    database: 'anivi'
})

module.exports = pool