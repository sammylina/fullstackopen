import { useState, useEffect } from 'react'
import PersonService from './services/persons';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filteredPersons, setFilteredPersons] = useState([]);

  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [notification_msg, setNotificationMsg] = useState(null)

  const { getAllPerson,
          createPerson, 
          removePerson, 
          updatePerson,
          } = PersonService;

  useEffect(() => {
    getAllPerson()
      .then(persons => setPersons(persons))
      .catch(err => console.log('fetch eror: ', err))
  
  }, []);

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
      createPerson(newPerson)
        .then(person => {
          setPersons([...persons, person])
          setNewName('');
          setPhoneNumber('');
          setNotificationMsg(`Added ${person.name}`)

          setTimeout(() => setNotificationMsg(null), 3000);
        });
    }
    else {
      const confirm_msg = (`${newName} is already added to phonebook, replace the old number with a new one?`) 
      if (window.confirm(confirm_msg)) {
        const newPerson =  {...persons[newNameIdx], number: phoneNumber}
        updatePerson(newPerson)
          .then(person => {
            setPersons(persons.map(p => p.id !== person.id ? p : person))
            setNewName('');
            setPhoneNumber('');
            setNotificationMsg(`Added ${person.name}`)
            setTimeout(() => setNotificationMsg(null), 3000);
          })
      }
    }
  }

  const handleDeletePerson = (person) => {
    const confirm_msg = `Delete ${person.name} ?` 
    if (window.confirm(confirm_msg)) {
      removePerson(person.id)
        .then((res) => {
          setPersons(persons.filter(p => person.id !== p.id))
        })
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
      <Notification message={notification_msg}/>
      <Filter searchName={searchName} onSearchPersonByName={searchPersonByName}/>

      <h3>Add a new</h3>
      <PersonForm onAddPerson={addPerson}
                  onNameChange={nameChange} 
                  newName={newName}
                  onPhoneNoChange={phoneNoChange}
                  phoneNumber={phoneNumber}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={handleDeletePerson}/>
  
    </div>
  )

}

export default App
