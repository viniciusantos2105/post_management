const process = require('process');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'posts_management',

    dialect: 'mysql'
};