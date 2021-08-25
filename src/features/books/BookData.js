import React from 'react';

const BookData = ({ category, title, author }) => (
  <>
    <span>{category}</span>
    <span>{title}</span>
    <span>{author}</span>
  </>
);

export default BookData;
