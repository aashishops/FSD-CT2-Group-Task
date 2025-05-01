import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';
import './App.css'; // make sure your CSS is imported

function App() {
  return (
    <Router>
      <div className="app">
        {/* Glowing Background Globes */}
        <div className="glow-container">
          <div className="globe red"></div>
          <div className="globe blue"></div>
          <div className="globe green"></div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMember />} />
          <Route path="/view" element={<ViewMembers />} />
          <Route path="/member/:id" element={<MemberDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;