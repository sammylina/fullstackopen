import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const onNameChange = (e) => {
    setNewName(e.target.value); 
  }

  const addPerson = (e) => { 
    e.preventDefault(); 
    const newNameIdx = persons.findIndex((person) => person.name === newName)
    if (newNameIdx < 0) {
      const newPerson = {name: newName};
      setPersons([...persons, newPerson])
      setNewName('');
    }
    else {
      alert(`${newName} is already added to phonebook`) 
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={onNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
  
      {
        persons.map(person => (<p key={person.name}>{person.name}</p>))
      }

    </div>
  )

}

export default App
