import React from 'react';
import PropTypes from 'prop-types';

const BookData = ({ data: { category, title, author } }) => (
  <>
    <span>{category}</span>
    <span>{title}</span>
    <span>{author}</span>
  </>
);

BookData.propTypes = {
  data: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default BookData;
