const { Pool } = require('pg');
const pool = new Pool({
user: 'postgres',          
host: 'localhost',
database: 'movie-notes',   
password: '20031027cyj.',      
port: 5432
});
module.exports = pool;
