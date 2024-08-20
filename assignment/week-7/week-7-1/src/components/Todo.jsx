import React, { useState } from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { todo } from '../store/atoms/todo';

const Todo = () => {
  return (
    <div>
      <RecoilRoot>
      <TodoInput />
      <TodoList /></RecoilRoot>
    </div>
  );
};

export default Todo;
const TodoList = () => {
  const todos = useRecoilValue(todo); // Use Recoil hook to get the todos array

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          <h3>Title: {todo.title}</h3>
          <p>Description: {todo.description}</p>
        </div>
      ))}
    </div>
  );
};

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
  });
  const setTodos = useSetRecoilState(todo);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleAddTodo = () => {
    if (newTodo.title && newTodo.description) { 
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo({
        title: '',
        description: '',
      });
    } else {
      alert('Both title and description are required.');
    }
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={newTodo.title}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={newTodo.description}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};