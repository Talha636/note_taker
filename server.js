const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Page not found, click NO
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/404.html'))
);

// Listening on PORT confirm
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));
