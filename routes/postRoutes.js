// routes/postRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const postController = require('../controllers/postController');

// Route for creating a new post
router.post('/', passport.authenticate('jwt', { session: false }), postController.createPost);

// Route for retrieving all posts
router.get('/', postController.getAllPosts);

// Route for retrieving a single post by ID
router.get('/:id', postController.getPostById);

// Route for updating a post by ID
router.put('/:id', passport.authenticate('jwt', { session: false }), postController.updatePostById);

// Route for deleting a post by ID
router.delete('/:id', passport.authenticate('jwt', { session: false }), postController.deletePostById);

module.exports = router;
