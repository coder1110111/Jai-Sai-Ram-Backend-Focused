const path = require('path');

exports.getHomePage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'main.html'));
}

exports.getServicePage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'services.html'));
}

exports.getContactUsPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'contact_us.html'));
}

exports.getInquiryPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'inquiry.html'));
}

// exports.postEnquiryPage = (req, res, next) => {
//     //POST request into Database
// }