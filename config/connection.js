const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'CMS_DB',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
          },
    }
);

module.exports = sequelize;

