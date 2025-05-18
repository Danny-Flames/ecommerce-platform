const express = require('express');
const router = express.Router();

// In-memory product list (mock)
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
