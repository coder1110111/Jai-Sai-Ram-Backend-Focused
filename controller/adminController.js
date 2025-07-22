const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const admin = require('../models/Admin');
const sequelize = require('../util/database');

exports.getLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'adminLogin.html'));
};

exports.postLoginPage = async (req, res) => {
    const {adminEmail, Password} = req.body;
    console.log(adminEmail);
    console.log(Password);
    try {
        const checkUser = await admin.findOne({where: {emp_email : adminEmail}});
        if(!checkUser) {
            return res.status(404).json({message: 'Email is not an Admin'});
        }
        else {
            console.log("Checking Password");
            console.log(checkUser.password);
            // const passwordCheck = await bcrypt.compare(Password, checkUser.password);
            const passwordCheck = (Password == checkUser.password);
            if(passwordCheck) {
                const token = jwt.sign({id: checkUser.id}, process.env.JWT_KEY);
                res.status(200).json({token, message:'Successfully Logged in!'});
            }
            else {
                res.status(401).json({message: 'Incorrect Password!'});
            }
        }
    }
    catch(err) {
        console.log(err);
    }
}

exports.getAdminPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'admin.html'));
}

