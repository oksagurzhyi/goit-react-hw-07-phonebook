import axios from 'axios';

export async function fetchContacts() {
  const { data } = await axios.get(
    'https://64e0d54b50713530432cbbb5.mockapi.io/api/contacts'
  );
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post(
    'https://64e0d54b50713530432cbbb5.mockapi.io/api/contacts',

    newContact
  );
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(
    `https://64e0d54b50713530432cbbb5.mockapi.io/api/contacts/${id}`
  );
  return data;
}
