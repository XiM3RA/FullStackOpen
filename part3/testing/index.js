const express = require("express");
const app = express();
const cors = require('cors')
const Note = require('./models/note')

app.use(cors());
app.use(express.json());
// For the static build directory
app.use(express.static('build'))

const url =
    `mongodb+srv://fullstack:qRefYQqEn15ZMmjs@cluster0.zcssndw.mongodb.net/noteApp?retryWrites=true&w=majority`


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

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  };

  notes = notes.concat(note);
  response.json(note);
});

/* Define a route to the root, request is answered with string as a parameter
 * of send. */
app.get("/", (req, res) => {
  res.send("<h1>Hello Worxld!</h1>");
});

/* This route responds with a JSON format string */
app.get("/api/notes", (req, res) => {
  Note.find({}).then(notes => {
      res.json(notes)
  })
});

/* Handles all HTTP GET requests to /api/notes/SOMETHING where SOMETHING is
 * an arbitrary string. */
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);

  /* conditional for handling invalid note request, otherwise browser
   * would indicate GET request was successful */
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.put("/api/notes/:id", (request, response) => {
    const body = request.body;
    const id = Number(request.params.id);
    const note = notes.find((note) => note.id === id);

  const newNote = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: id,
  };

  response.json(newNote);
}
)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
