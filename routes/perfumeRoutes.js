const express = require('express');
const router = express.Router();
const perfumeController = require('../controllers/perfumeController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware.isAuthenticated);

router.post('/add', perfumeController.addPerfume);
router.put('/edit/:id', perfumeController.editPerfume);
router.delete('/delete/:id', perfumeController.deletePerfume);
router.get('/get/:id', perfumeController.getPerfumeById);
router.get('/get-by-category/:category', perfumeController.getPerfumesByCategory);
router.get('/get-by-color/:color', perfumeController.getPerfumesByColor);
router.get('/get-by-price-range', perfumeController.getPerfumesByPriceRange);
router.get('/get-by-rating/:rating', perfumeController.getPerfumesByRating);
router.get('/get-all', perfumeController.getAllPerfumes);

module.exports = router;
