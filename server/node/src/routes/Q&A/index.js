const express = require('express');
const router = express.Router();

// Import routes
const nestedCommentRoute = require('./NestedComment.route');
const questionaireRoute = require('./Questionaire.route');

// Use routes
router.use('/nested-comments', nestedCommentRoute.routes);
router.use('/questionaire', questionaireRoute.routes);

exports.routes = router;