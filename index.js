const express = require('express');
require('dotenv').config()
const { default: mongoose } = require('mongoose');
const cors = require("cors");
const { userRoutes } = require('./routes/userRoutes');
const { db } = require('./config/db');
const { categoryRoutes } = require('./routes/categoryRoutes');
require('dotenv').config()
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
db.connect();
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/categories', categoryRoutes)
app.listen(8000, () => {
    console.log('listening');
})