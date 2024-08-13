import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch('http://localhost:3000/todos').then(async (res) => {
          const json = await res.json();
          console.log(json);
          setTodos(json.Todos);
        });
        console.log("todos",todos)
      } catch (error) {
        console.log("error",error)
      }
    };
    fetchData()
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
