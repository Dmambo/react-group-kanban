import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRocket } from './redux/rocket';
import MyProfile from './components/MyProfile/MyProfile';
import Rocket from './components/Rocket/rocket';

import Header from './components/Header/Header';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);
import Missions from './components/Missions/Missions';

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
};

export default App;
