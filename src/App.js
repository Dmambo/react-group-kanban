import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import MyProfile from './components/MyProfile/MyProfile';
import Rocket from './components/Rocket/rocket';
import Missions from './components/Missions/Missions';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
