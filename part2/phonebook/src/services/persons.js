import axios from 'axios';

const persons_api_url = 'http://localhost:3000/persons';

function getAllPerson() {
  return axios.get(persons_api_url)
          .then(res => res.data)
}

function createPerson(person) {
  return axios.post(persons_api_url, person)
          .then(res => res.data);
}

function updatePerson(person) {
  const url = `${persons_api_url}/${person.id}`;
  return axios.put(url, person)
          .then(res => res.data);
}

function removePerson(id) {
  const url = `${persons_api_url}/${id}`;
  return axios.delete(url)
          .then(res => res);
}

export default {getAllPerson, createPerson, removePerson, updatePerson}
