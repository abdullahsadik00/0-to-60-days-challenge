import {  Suspense, lazy } from 'react';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
    
const Landing = lazy(() => import('./compenents/Landing'));
const Dashboard = lazy(() => import('./compenents/Dashboard.jsx'));
import PropDrilling from './PropDrilling.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={"<Loading />"}>

        <AppBar />
        <Routes>
            
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        </Suspense>
        </BrowserRouter>
        <PropDrilling/>
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
      </div>
    </div>
  );
}
