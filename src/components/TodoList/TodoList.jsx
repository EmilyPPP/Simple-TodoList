import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todoList, setTodoList] = useState(readTodoList);

  const handleAdd = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const handleUpdate = (updated) => {
    setTodoList(
      todoList.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const filtered = getFilteredItems(todoList, filter);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodoList() {
  const todoList = localStorage.getItem('todoList');
  return todoList ? JSON.parse(todoList) : [];
}

function getFilteredItems(todoList, filter) {
  if (filter === 'all') {
    return todoList;
  }

  return todoList.filter((item) => item.status === filter);
}
