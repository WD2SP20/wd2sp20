const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'guitar_shop',
  username: 'csci32',
  password: 'csci32',
  dialect: 'mysql',
  // A pool is good for multiple connections
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

