import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TutorSignUp from './components/TutorSignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<TutorSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
