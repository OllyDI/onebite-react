const { Sequelize } = require('sequelize');
require('dotenv').config({ path: 'init/init.env' });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate()
.then(() => console.log('SQL 연결 성공'))
.catch((err) => console.log('SQL 연결 실패', err));

module.exports = sequelize;