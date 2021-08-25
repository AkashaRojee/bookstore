import React from 'react';

const BookData = ({ data: { category, title, author } }) => {
  console.log(category);
  return (
    <>
      <span>{category}</span>
      <span>{title}</span>
      <span>{author}</span>
    </>
  );
};

export default BookData;
