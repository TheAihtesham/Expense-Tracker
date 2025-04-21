const { addexpense, getexpense, deleteexpense } = require('../controller/expense');
const { addincome, getincome, deleteincome } = require('../controller/transactions');

const router = require('express').Router();

router.post('/addincome', addincome);
router.get('/getincome', getincome);
router.delete('/deleteincome/:id', deleteincome);


router.post('/addexpense', addexpense);
router.get('/getexpense', getexpense);
router.delete('/deleteexpense/:id', deleteexpense);

module.exports = router;
