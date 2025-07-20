const express = require('express');
const router = express.Router();

const adminControls = require('../controller/adminController');
const authenticate = require('../middlewares/authentication');

router.get('/login', adminControls.getLoginPage);    //Make a receiving function
router.post('/login', adminControls.postLoginPage);       //Make the receiving Function
router.get('/home', adminControls.getAdminPage);     //Just sends the basic HTML page for admin
// router.get('/panel', authenticate, adminControls.getAdminData); //Authenticates if valid user and then sneds the data


module.exports = router;