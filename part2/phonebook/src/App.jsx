import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [filteredPersons, setFilteredPersons] = useState([]);

  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchName, setSearchName] = useState('');


  const onPhoneNoChange = (e) => {
    setPhoneNumber(e.target.value); 
  }

  const onNameChange = (e) => {
    setNewName(e.target.value); 
  }

  const addPerson = (e) => { 
    e.preventDefault(); 
    const newNameIdx = persons.findIndex((person) => person.name === newName)
    if (newNameIdx < 0) {
      const newPerson = {name: newName, number: phoneNumber};
      setPersons([...persons, newPerson])
      setNewName('');
      setPhoneNumber('');
    }
    else {
      alert(`${newName} is already added to phonebook`) 
    }
  }

  const searchPersonByName = (e) => {
    const fPersonIdx = []
    persons.forEach((p, i) => {
      if (p.name.includes(e.target.value)) {
        fPersonIdx.push(i); 
      } 
    })
    setFilteredPersons(fPersonIdx);
    setSearchName(e.target.value)
  }

  const personsToShow = searchName ? filteredPersons.map(idx => persons[idx])
                                  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={searchName} onChange={searchPersonByName}/>
     </div>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={onNameChange}/>
        </div>
        <div>
          number: <input value={phoneNumber} onChange={onPhoneNoChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
  
      {
        personsToShow.map(person => (<p key={person.name}>{person.name} {person.number}</p>))
      }

    </div>
  )

}

export default App
