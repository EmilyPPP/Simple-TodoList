import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Status } from '../../models/status';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;

  const handleChange = () => {
    const newStatus = status === Status.Active ? Status.Done : Status.Active;
    onUpdate({ ...todo, status: newStatus });
  };

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        checked={status === Status.Done}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <button className={styles.button} onClick={handleClick}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
