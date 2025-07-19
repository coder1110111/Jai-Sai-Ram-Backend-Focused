const path = require('path');

exports.getLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'adminLogin.html'));
};