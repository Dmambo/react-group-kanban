import { configureStore } from '@reduxjs/toolkit';
import rockets from './rocket';

const store = configureStore({
  reducer: {
    rockets: rockets.reducer,
  },
});

export default store;
