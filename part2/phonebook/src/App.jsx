import { useState } from 'react'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

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


  const phoneNoChange = (e) => {
    setPhoneNumber(e.target.value); 
  }

  const nameChange = (e) => {
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
      <Filter searchName={searchName} onSearchPersonByName={searchPersonByName}/>

      <h3>Add a new</h3>
      <PersonForm onAddPerson={addPerson}
                  onNameChange={nameChange} 
                  newName={newName}
                  onPhoneNoChange={phoneNoChange}
                  phoneNumber={phoneNumber}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
  
    </div>
  )

}

export default App
