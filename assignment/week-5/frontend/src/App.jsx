import { useEffect, useState } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);  // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/todos');
        const json = await res.json();
        console.log(json);  // Check the fetched data
        setTodos(json.Todos || []);  // Use json.Todos and provide a fallback
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();  // Call fetchData to actually fetch the data
  }, []);  // Empty dependency array means this runs once when the component mounts

  console.log("todos", todos);  // This will log the updated state after a re-render

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
