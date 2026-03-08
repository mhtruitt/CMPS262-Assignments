const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get('/', controller.getAccounts);
router.get('/accounts/:id', controller.getAccountsById);

module.exports = router;
