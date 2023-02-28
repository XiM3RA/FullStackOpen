const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


app.use(cors());
const Note = require("./models/note");
// For the static build directory
app.use(express.static("build"));
/* Note there are multiple app.use(), these instantiate middleware and the order
 * in which they are included is sequential. Order is important and defined
 * in the usual convention here */
app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-01-10T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-01-10T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-01-10T19:20:14.298Z",
    important: true,
  },
];


const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/notes", (request, response, next) => {
  const body = request.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  note.save().then((savedNote) => {
    response.json(savedNote);
  })
    .catch(error => next(error))
});

/* Define a route to the root, request is answered with string as a parameter
 * of send. */
app.get("/", (req, res) => {
  res.send("<h1>Hello Worxld!</h1>");
});

/* This route responds with a JSON format string */
app.get("/api/notes", (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes);
  });
});

/* Handles all HTTP GET requests to /api/notes/SOMETHING where SOMETHING is
 * an arbitrary string. */
// next() transfers any error to the error handling middleware
app.get("/api/notes/:id", (request, response, next) => {
  Note.findById(request.params.id).then((note) => {
    if (note) {
        response.json(note);
    } else {
        response.status(404).end()
    }
  })
  .catch(error => next(error))
});

app.put("/api/notes/:id", (request, response, next) => {
  const { content, important } = request.body;

  Note.findByIdAndUpdate(
    request.params.id,
    { content, important },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)



// Define our error handling middleware
const errorHandler = (error, request, response, next) => {

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
