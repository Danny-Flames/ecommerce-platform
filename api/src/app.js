const express = require('express');
const cors = require('cors');
const productsRoute = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoute);

module.exports = app;
