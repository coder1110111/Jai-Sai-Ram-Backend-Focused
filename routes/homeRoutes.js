const express = require('express');
const router = express.Router();

//controller file
const generalControls = require('../controller/generalController');

router.get('/', generalControls.getHomePage);
router.get('/services', generalControls.getServicePage);
router.get('/contact-us', generalControls.getContactUsPage);
router.post('/send-query', generalControls.postQuery);

module.exports = router;