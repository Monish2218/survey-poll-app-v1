const express = require('express');
const {
    createSurvey,
    deleteSurvey,
    getAllSurveys,
    getSurveyById,
    updateSurvey
} = require('../controllers/surveyController');

const router = express.Router();

router.get('/', getAllSurveys);
router.get('/:id', getSurveyById);
router.post('/', createSurvey);
router.put('/:id', updateSurvey);
router.delete('/:id', deleteSurvey);

module.exports = router;