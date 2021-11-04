# 11 Express.js: Note Taker

## User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Acceptance Criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Mock-Up

The following images show the web application's appearance and functionality:

## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
parse/then read file 

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Application front end must connect to an Express.js back end.

  * Application back end must store notes that have a unique id in a JSON file.

  * Application must be deployed to Heroku.

<img width="1440" alt="Screen Shot 2021-11-03 at 22 32 10" src="https://user-images.githubusercontent.com/85548877/140248136-bf58a027-3cc3-40cf-9fae-7b51fa9ad6df.png">
<img width="1440" alt="Screen Shot 2021-11-03 at 22 32 29" src="https://user-images.githubusercontent.com/85548877/140248138-7917f728-bf5b-4b9b-8b17-a543581320b3.png">
<img width="1440" alt="Screen Shot 2021-11-03 at 22 32 58" src="https://user-images.githubusercontent.com/85548877/140248139-23fbe982-1477-4b29-ac6c-4b8327602b30.png">

## Review

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

