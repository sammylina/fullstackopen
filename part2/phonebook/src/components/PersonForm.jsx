const PersonForm = ({
  onAddPerson,
  onNameChange,
  newName,
  onPhoneNoChange,
  phoneNumber
}) => {
  return (
    <form onSubmit={onAddPerson}>
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
  
  );
}


export default PersonForm;
