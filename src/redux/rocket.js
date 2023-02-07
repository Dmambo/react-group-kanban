import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchRocket = createAsyncThunk('rockets/fetchRocket', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');

  const { data } = response;
  data.map((rocket) => ({
    id: rocket.id,
    name: rocket.name,
    type: rocket.type,
    description: rocket.description,
    images: rocket.flickr_images,
  }));
  return data;
});

const initialState = {
  rockets: [],
};

const rockets = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRocket.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        rockets: action.payload,
      };
      return newState;
    },
  },
});

export default rockets;
