const express = require('express');
const router = express.Router();

const adminControls = require('../controller/adminController');

router.get('/login', adminControls.getLoginPage);    //Make a receiving function
//router.post('/login', adminControls.postLogin);       //Make the receiving Function
//router.get('/home', authenticate, adminControls);     //Make the receiving Function

module.exports = router;