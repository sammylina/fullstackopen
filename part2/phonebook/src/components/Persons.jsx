const Persons = ({personsToShow, deletePerson}) => {
  return (
    <>
      {
        personsToShow.map(person => {
          return (<div key={person.id}>
              <p>{person.name} {person.number}</p>
              <button onClick={() => deletePerson(person)}>delete</button>
            </div>);
        })
      }
    </>
  );
}

export default Persons;
