const express = require('express');
const app = express();
const port = 3000;

const workingHoursMiddleware = require('./customMiddleware');

// Middleware to serve static files (CSS)
app.use(express.static(__dirname + '/public'));

// Middleware to restrict access during working hours
app.use(workingHoursMiddleware);

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Set the template engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  const student = {
    name: 'Terra Sarr',
    email:'samba.co93@gmail.com',
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
  }
  res.render('pages/home',{students:student});
});

app.get('/services', (req, res) => {
  res.render('pages/services');
});

app.get('/contact', (req, res) => {
  const student = {
    adress: 'Terra Sarr',
    email:'samba.co93@gmail.com',
    phoneNumber:'77 593 15 95'
  }
    res.render('pages/contact',{students:student});
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
