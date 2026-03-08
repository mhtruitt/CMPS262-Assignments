const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get('/', controller.getAccounts);
router.get('/accounts/:id', controller.getAccountsById);
router.post('/accounts', controller.addNewAccount);
router.put('/accounts/:id', controller.updateAccount);


module.exports = router;
