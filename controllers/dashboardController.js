const Post = require('../models/Post');

// Controller function to get counts of active and inactive posts
exports.getPostCounts = async (req, res) => {
    try {
        const activeCount = await Post.countDocuments({ isActive: true });
        const inactiveCount = await Post.countDocuments({ isActive: false });
        res.json({ activeCount, inactiveCount });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
