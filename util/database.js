const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '9f!7ni/ceg_hvs74"qwph*%@r@{', {
  dialect: 'mysql',
  hose: 'localhost'
});

module.exports = sequelize;
