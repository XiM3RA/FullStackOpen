import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const namesToShow = persons;

  const addName = (event) => {
    event.preventDefault();
    const noteObject = {
      name: newName,
    };
    if (persons.some((e) => e.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
      setNewName("");
    } else {
      setPersons(persons.concat(noteObject));
      setNewName("");
    }
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:{" "}
          <input
            id="fname"
            name="fname"
            value={newName}
            onChange={handleNoteChange}
          />
        </div>
        <div>
          number: <input id="number" name="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {namesToShow.map((name) => (
        <Note key={name.id} note={name.name} />
      ))}
    </div>
  );
};

export default App;
