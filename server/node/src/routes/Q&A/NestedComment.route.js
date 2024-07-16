const express = require('express');
const router = express.Router();

const commentController = require('../../controller/Q&A/NestedComment.controller');

router.post('/', commentController.getCommentByQid);
router.post('/replyToComment', commentController.updateComment);

exports.routes = router;