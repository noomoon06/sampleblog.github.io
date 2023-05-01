const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.get('/blogs', blogController.getAllBlog)

router.post('/blogs', blogController.createBlog);

router.get('/blogs/create', blogController.viewCreateBlog);

router.get('/blogs/:id', blogController.getBlogDetails);

router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;