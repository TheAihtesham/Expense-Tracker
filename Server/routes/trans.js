const { addexpense, getexpense, deleteexpense } = require('../controller/expense');
const { signup, login } = require('../controller/AuthController')
const { addincome, getincome, deleteincome } = require('../controller/transactions');
const { loginValidation, signupValidation } = require('../middleware/Authentication');

const router = require('express').Router();

// Login route (you can update it as needed)
router.post('/login', loginValidation, login)
router.post('/signup', signupValidation, signup)

// Income routes
router.post('/addincome', addincome);
router.get('/getincome', getincome);
router.delete('/deleteincome/:id', deleteincome);

// Expense routes
router.post('/addexpense', addexpense);
router.get('/getexpense', getexpense);
router.delete('/deleteexpense/:id', deleteexpense);

module.exports = router;
