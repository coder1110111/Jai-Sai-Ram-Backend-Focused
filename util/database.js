const Sequelize = require('sequelize');

const sequelize = new Sequelize(`${process.env.DB_DEFAULT_DATABASE}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`,
    {dialect: `${process.env.DB_DIALECT}`, host: `${process.env.DB_HOST}`}
);


module.exports = sequelize;