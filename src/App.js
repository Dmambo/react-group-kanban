import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import MyProfile from './components/MyProfile/MyProfile';
import Rockets from './pages/Rockect';
import Missions from './components/Missions/Missions';

import Header from './components/Header/Header';

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  </>
);

export default App;
