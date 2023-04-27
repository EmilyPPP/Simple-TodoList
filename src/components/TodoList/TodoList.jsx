import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import { Status } from '../../models/status';
import Todo from '../Todo/Todo';
import { filters } from '../../models/filters';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: 1, text: '장보기', status: Status.Active },
    { id: 2, text: '공부하기', status: Status.Active },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  const handleDelete = (id) => setTodos(todos.filter((item) => item.id !== id));

  const filtered = getFilteredItems(todos, filter);

  return (
    <section>
      <ul>
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

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }

  return todos.filter((item) => item.status === filter);
}
