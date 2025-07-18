const express = require ('express');
const path = require('path');
const sequelize = require('sequelize');
const cors = require('cors');

require('dotenv').config();

const inquiryRouter = require('./routes/inquiryRoutes');
const adminRouter = require('./routes/adminRoutes');

const app = express();


// app.use('/home', )
app.use('/inquiry', inquiryRouter);
app.use('/admin', adminRouter)
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'view', '404.html'));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Listening at http://localhost:${PORT}`);
});