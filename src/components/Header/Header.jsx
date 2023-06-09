import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.darkModeButton} onClick={toggleDarkMode}>
        {darkMode ? <BsSunFill /> : <BsMoonFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
              value={value}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
