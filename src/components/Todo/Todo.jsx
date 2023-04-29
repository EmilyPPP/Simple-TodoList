import React, { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Status } from '../../models/status';
import styles from './Todo.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const { darkMode } = useContext(DarkModeContext);

  const handleChange = () => {
    const newStatus = status === Status.Active ? Status.Done : Status.Active;
    onUpdate({ ...todo, status: newStatus });
  };

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <li className={`${styles.todo} ${darkMode === true && styles.darkMode}`}>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={status === Status.Done}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor='checkbox'>
        {text}
      </label>
      <button className={styles.button} onClick={handleClick}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
