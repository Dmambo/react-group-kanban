import { configureStore } from '@reduxjs/toolkit';
import rocket from './rocket';

const store = configureStore({
  reducer: {
    rocket,
  },
});

export default store;
