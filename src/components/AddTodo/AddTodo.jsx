import React, { useContext, useState } from 'react';
import { v4 } from 'uuid';
import { Status } from '../../models/status';
import styles from './AddTodo.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function AddTodo({ onAdd }) {
  const { darkMode } = useContext(DarkModeContext);

  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }

    onAdd({ id: v4(), text, status: Status.Active });
    setText('');
  };

  return (
    <form
      className={`${styles.form} ${darkMode === true && styles.darkMode}`}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
