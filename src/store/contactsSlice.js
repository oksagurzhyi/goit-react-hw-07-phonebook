import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  deleteContactFetch,
  addContactFetch,
} from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllContacts.fulfilled, (state, action) => {
      return {
        ...state,
        contacts: action.payload,
        isLoading: false,
      };
    });
    builder.addCase(fetchAllContacts.pending, state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    });
    builder.addCase(fetchAllContacts.rejected, (_, action) => {
      return {
        isLoading: false,
        error: action.payload,
      };
    });
    builder.addCase(deleteContactFetch.fulfilled, (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.id
        ),
        isLoading: false,
      };
    });
    builder.addCase(deleteContactFetch.pending, state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    });
    builder.addCase(addContactFetch.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(addContactFetch.pending, state => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(addContactFetch.rejected, action => {
      return {
        isLoading: false,
        error: action.payload,
      };
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
