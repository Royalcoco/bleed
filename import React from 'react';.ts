import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Send from './components/Send';
import Receive from './components/Receive';
import History from './components/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;...Router
confirm / confirm: (message: string) => void.prototype
