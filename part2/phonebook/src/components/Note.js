const Note = ({ personsToShow, remove }) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => remove(person.id, person.name)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Note;
