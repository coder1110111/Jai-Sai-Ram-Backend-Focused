const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Admin = sequelize.define('admin', {

    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    emp_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    emp_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emp_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps : false
});

module.exports = Admin;