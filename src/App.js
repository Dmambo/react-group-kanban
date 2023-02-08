import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyProfile from './components/MyProfile/MyProfile';
import Rockets from './pages/Rockect';
import Missions from './components/Missions/Missions';
import { fetchRockets } from './redux/rocket';

import Header from './components/Header/Header';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets({ method: 'GET' }));
  }, [dispatch]);

  return (
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
};

export default App;
