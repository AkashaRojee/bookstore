import React from 'react';
import styles from './BookForm.module.scss';

const BookForm = () => (
  <div className={styles['book-form']}>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" />
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

export default BookForm;
