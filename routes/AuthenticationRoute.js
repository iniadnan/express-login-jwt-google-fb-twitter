const express = require('express');
const router = express.Router();

const gas = require('../controllers/AuthenticationController')

router.get('/', (req, res) => {
    res.json(gas);
});
router.get('/asd', (req, res) => {
    res.send("Hello Yellow!");
});

module.exports = router;