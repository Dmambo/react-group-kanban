import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocket';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
