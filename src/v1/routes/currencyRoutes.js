const express = require('express');
const router = express.Router();
const {
  getAllCurrency,
  getSingleCurrency,
  createCurrency,
  updatedCurrency,
  deleteCurrency,
} = require('../controllers/currencyController');

router.get('/', getAllCurrency);
router.get('/:id', getSingleCurrency);
router.post('/', createCurrency);
router.put('/:id', updatedCurrency);
router.delete('/:id', deleteCurrency);

module.exports = router;
