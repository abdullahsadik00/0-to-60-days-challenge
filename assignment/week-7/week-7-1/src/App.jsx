import {  Suspense, lazy } from 'react';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
    
const Landing = lazy(() => import('./components/Landing.jsx'));
const Dashboard = lazy(() => import('./components/Dashboard.jsx'));
import PropDrilling from './PropDrilling.jsx';
import Todo from './components/Todo.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={"<Loading />"}>
        <AppBar />
        <Routes> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
          <Route path="/prop" element={<PropDrilling />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
        </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Landing
        </button>
        <button
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            navigate('/prop');
          }}
        >
          Prop PropDrilling
        </button>
        <button
          onClick={() => {
            navigate('/todo');
          }}
        >
          Todo
        </button>
      </div>
    </div>
  );
}
