const router = require('express').Router();

const { login, register } = require('./controllers');

router.route('/login').post(login);
router.route('/register').post(register);

module.exports = router;
