import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rocket';
import missionsReducer from './missionsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
