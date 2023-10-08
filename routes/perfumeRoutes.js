const express = require('express');
const router = express.Router();
const perfumeController = require('../controllers/perfumeController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware.isAuthenticated, perfumeController.addPerfume);
router.put('/edit/:id', authMiddleware.isAuthenticated, perfumeController.editPerfume);
router.delete('/delete/:id', authMiddleware.isAuthenticated, perfumeController.deletePerfume);
router.get('/get/:id', perfumeController.getPerfumeById);
router.get('/get-by-category/:category', perfumeController.getPerfumesByCategory);
router.get('/get-by-color/:color', perfumeController.getPerfumesByColor);
router.get('/get-by-price-range', perfumeController.getPerfumesByPriceRange);
router.get('/get-by-rating/:rating', perfumeController.getPerfumesByRating);
router.get('/get-all', perfumeController.getAllPerfumes);

module.exports = router;
