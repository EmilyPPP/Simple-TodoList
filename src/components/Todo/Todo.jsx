import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Status } from '../../models/status';

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
    <li>
      <input
        type='checkbox'
        checked={status === Status.Done}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>{text}</label>
      <button onClick={handleClick}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
