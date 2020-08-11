const express = require('express');
const router = express.Router();

const { create, trainingcategoryById, read, remove, list } = require('../controllers/trainingcategory');
const { requireSignin, isAuth, isEmployee } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/trainingcategory/:trainingcategoryId', read);
router.post('/trainingcategory/create/:userId', isEmployee, create);

router.get('/trainingcategories', list);

router.param('trainingcategoryId', trainingcategoryById);
router.param('userId', userById);

module.exports = router;
