import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../booksReducer';
import BookInfo from '../logic/BookInfo';
import styles from './BookForm.module.scss';

const BookForm = () => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = new BookInfo('category', input.title, input.author);
    console.log(newBook);
    dispatch(addBook(newBook));
  };

  return (
    <div className={styles['book-form']}>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name="title" type="text" placeholder="Book title" value={input.title} onChange={(e) => handleInput(e)} />
        <input name="author" type="text" placeholder="Author" value={input.author} onChange={(e) => handleInput(e)} />
        <select>
          <option value="" disabled>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
