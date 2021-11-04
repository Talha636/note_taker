const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const util = require('util');

const PORT = process.env.port || 3001;

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Reading notes from db.json
app.get('/api/notes', (req, res) => {
  readFile('./db/db.json', 'utf8').then((data) => {
    notes = [].concat(JSON.parse(data));
    res.json(notes);
  })
})

// Posting notes to db.json
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  readFile('./db/db.json', 'utf8').then((data) => {
    const notes = [].concat(JSON.parse(data));
    notes.id = notes.length + 1;
    notes.push(newNote);
    return notes;
  }).then((notes) => {
    writeFile('./db/db.json', JSON.stringify(notes));
    res.json(newNote);
  })
});

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
