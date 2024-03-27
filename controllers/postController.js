const Post = require('../models/Post');

// Controller function to create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, body, createdBy, isActive, latitude, longitude } = req.body;
        const post = await Post.create({ title, body, createdBy, isActive, latitude, longitude });
        res.status(201).json({ post });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({ posts });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json({ post });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to update a post by ID
exports.updatePostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, body, isActive, latitude, longitude } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(postId, { title, body, isActive, latitude, longitude }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json({ updatedPost });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to delete a post by ID
exports.deletePostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
