import React from 'react';
import { deleteContactFetch } from '../../store/operations';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.btnDelete}
        onClick={() => dispatch(deleteContactFetch(id))}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
