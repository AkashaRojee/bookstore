import React from 'react';
import { PropTypes } from 'prop-types';

const BookActions = ({ onRemove }) => (
  <>
    <button type="button">Comments</button>
    <button type="button" onClick={onRemove}>Remove</button>
    <button type="button">Edit</button>
  </>
);

BookActions.propTypes = {
  onRemove: PropTypes.func.isRequired,
};

export default BookActions;
