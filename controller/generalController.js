const path = require('path');
const Query = require('../models/Query'); 

exports.getHomePage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'main.html'));
}

exports.getServicePage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'services.html'));
}

exports.getContactUsPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'contact_us.html'));
}


exports.postQuery = async (req, res, next) => {
    const {name, email, query} = req.body;
    console.log(name, " ", email, " ", query);
    try {
        console.log("In try block");
        const prevQuery = await Query.findAll({where: {email: email}});
        if(prevQuery.length > 0) {
            await prevQuery.destroy();
        }
        await Query.create({name: name, email: email, question: query});
        return res.status(200).json({message: "Query was submitted!"});
    }
    catch(err) {
        console.error(err);
        return res.status(500).json({message: "Server Unavailable! Please try again later."})
    }
}