const Sequelize = require('sequelize');
// Bring in the categories model
const categoryModel = require('./models/categories');
const productsModel = require('./models/products');
const usersModel = require('./models/users');

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
  // To remove deprecated warning
  operatorsAliases: false,
  logging: false
});

const categories = categoryModel(sequelize, Sequelize);
const products = productsModel(sequelize, Sequelize);
products.associate(categories);
sequelize.sync({alter: true})
.then(() => {
  console.log('Database & Tables Created Successfully!');
});
const users = usersModel(sequelize, Sequelize);

module.exports = {
  categories,
  products,
  users,
};