const express = require('express');
const router = express.Router();
const orderRoutes = require('./orderRoutes');

router.use('/orders', orderRoutes);

module.exports = router;