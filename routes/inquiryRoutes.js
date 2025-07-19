const express = require('express');
const router = express.Router();

const generalControls = require('../controller/generalController');

router.get('/', generalControls.getInquiryPage);
// router.post('/', generalControls)

module.exports = router;