const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');

router.get('/', postController.getPost);
router.post('/', postController.addPost);
router.put('/', postController.editPost);
router.delete('/:_id', postController.deletePost);

module.exports = router;