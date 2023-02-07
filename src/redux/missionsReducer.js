import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

const missionsReducer = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionsReducer.reducer;
