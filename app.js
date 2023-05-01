const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://moonninja:dh0VakGhRv4RDR2s@cluster0.ulhydn0.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.redirect('/blogs');
});


app.get('/about', (req, res) => {

  res.render('about', { title: 'About' });
});

app.get('/about-us', (req, res) => {

  res.redirect('/about');
});


// blog routes 
app.use(blogRoutes);

app.use((req, res) => {
  res.render('404', { title: '404' });
})
