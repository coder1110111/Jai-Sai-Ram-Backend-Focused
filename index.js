const express = require ('express');
const path = require('path');
const Sequelize = require('sequelize');
const cors = require('cors');

require('dotenv').config();

const sequelize = require('./util/database');

const homeRouter = require('./routes/homeRoutes');
const inquiryRouter = require('./routes/inquiryRoutes');
const adminRouter = require('./routes/adminRoutes');

const app = express();

//generic commands
app.use(express.json());
app.use(cors());

//Sending Public Files at the front
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', homeRouter);
app.use('/inquiry', inquiryRouter);
app.use('/admin', adminRouter)
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'view', '404.html'));
});

const PORT = process.env.PORT || 1800;

sequelize.sync()
.then(result => {
    app.listen(PORT, () => {
        console.log(`Server Listening at http://localhost:${PORT}`);
    });
}) .catch(err => console.log(err));

