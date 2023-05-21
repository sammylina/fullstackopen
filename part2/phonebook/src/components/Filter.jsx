const Filter = ({searchName, onSearchPersonByName}) => {
  return (
      <div>
        filter shown with <input value={searchName} onChange={onSearchPersonByName}/>
     </div>
  );
}

export default Filter;
