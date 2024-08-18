import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
// const Dashboard = lazy(() => import('./components/Dashboard'));
// const Landing = lazy(() => import('./components/Landing'));
import Landing from './compenents/Landing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
            
          {/* <Route path="/dashboard" element={<Suspense fallback={"loading"}><Dashboard /></Suspense>} /> */}
          <Route path="/" element={<Landing />} />
        </Routes>
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
      </div>
    </div>
  );
}
