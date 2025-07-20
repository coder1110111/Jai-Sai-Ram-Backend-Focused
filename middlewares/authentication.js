const jwt = require('jsonwebtoken');
const path = require('path');

const admin = require('../models/Admin');

exports.authenticate = (req, res, next) => {
    next();
}