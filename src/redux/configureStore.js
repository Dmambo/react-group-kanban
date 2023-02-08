import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocket';
import missionsReducer from './missionsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
