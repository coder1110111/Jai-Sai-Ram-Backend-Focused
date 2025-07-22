const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Query = sequelize.define('query', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Query;