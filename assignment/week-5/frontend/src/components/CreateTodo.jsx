import { useState } from 'react';

export function CreateTodo() {
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('');

  const submitTodo = async () => {
    try {
      const response = await fetch('http://localhost:3000/todo', {
        method: 'POST',
        body: JSON.stringify({
          title: input,
          description: description
        }),
        headers: {
          'Content-Type': 'application/json'  // Correct header
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log('Server response:', json);  // Log server response
      alert('Todo Added');
      setInput('');  // Clear input fields after successful submission
      setDescription('');
    } catch (error) {
      console.error('Error adding todo:', error);
      alert('Failed to add todo');
    }
  };

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        name="title"
        placeholder="Title"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />
      <br />
      <button onClick={submitTodo}>Submit Todo</button>
    </div>
  );
}
