const express = require('express');
const app = express();
const movieRoutes = require('./routes/movies');
const path = require('path');


app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/movies', movieRoutes);


app.get('/', (req, res) => {
  res.redirect('/movies');
});


app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
