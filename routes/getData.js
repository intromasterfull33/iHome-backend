const { Router } = require('express');
const { getData } = require('../controllers/getData');

const router = Router();

router.get('/',getData);

module.exports = router;