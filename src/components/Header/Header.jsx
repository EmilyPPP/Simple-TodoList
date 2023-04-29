import React, { useContext } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import styles from './Header.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header
      className={`${styles.header} ${darkMode === true && styles.darkMode}`}
    >
      <button
        className={styles.darkModeButton}
        onClick={() => toggleDarkMode()}
      >
        {darkMode ? <BsSunFill /> : <BsMoonFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              } ${darkMode === true && styles.darkMode}`}
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
