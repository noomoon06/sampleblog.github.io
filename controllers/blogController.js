const Blog = require('../models/blogs');

const getAllBlog = (req, res) => {
  Blog.find().sort({ createdAt: 1})
  .then((result) => {
    res.render('index', { title: 'All Blogs', blogs: result})
  })
  .catch((err) => {
    console.log(err)
  });
};

const createBlog = (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then(() => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    })
};

const viewCreateBlog = (req, res) => {
  res.render('create', { title: 'Create' });
};

const getBlogDetails = (req, res) => {
  Blog.findById(req.params.id)
  .then((result) => {
    res.render('details', { title: 'Detail', blog: result})
  })
  .catch((err) => {
    console.log(err);
  });
};

const deleteBlog = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
  .then(result => {
    res.json({ redirect: '/blogs'})
  })
  .catch(err => {
    console.log(err);
  })
};

module.exports = {
  getAllBlog,
  createBlog,
  getBlogDetails,
  viewCreateBlog,
  deleteBlog
}