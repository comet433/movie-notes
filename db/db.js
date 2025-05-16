const { Pool } = require('pg');
const pool = new Pool({
user: 'postgres',          // 默认 PostgreSQL 用户名是 postgres
host: 'localhost',
database: 'movie-notes',   // 一定要和你在 pgAdmin 中创建的数据库名字一致
password: '20031027cyj.',      // 这是你 PostgreSQL 登录的密码
port: 5432
});
module.exports = pool;