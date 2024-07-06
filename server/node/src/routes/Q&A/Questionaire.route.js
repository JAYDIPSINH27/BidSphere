const express = require('express')
const questionaireController = require('../../controller/Q&A/Questionaire.controller')

const router = express.Router();

router.get('/getAllQuestions', questionaireController.getAllQuestions);
router.post('/getQuestionById', questionaireController.getQuestionById);
router.post('/postQuestion', questionaireController.postQuestion);

exports.routes = router;