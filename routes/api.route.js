const express = require('express');
const router = express.Router();

// Routes
const postRouter = require('./post.route');

router.use('/post', postRouter);

module.exports = router;