import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from '../services/fetchContactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchContacts();

      return contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactFetch = createAsyncThunk(
  'contacts/deleteContactFetch',
  async (id, thunkAPI) => {
    try {
      const contact = await deleteContact(id);

      return contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactFetch = createAsyncThunk(
  'contacts/addContactFetch',
  async (newContact, thunkAPI) => {
    try {
      const contact = await addContact(newContact);

      return contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
