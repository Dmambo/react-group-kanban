import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';
const ROCKETS = 'spaceX/rockets/ROCKETS';
const ROCKET = 'spaceX/rockets/ROCKET';
const RESERVE_ROCKET = 'spaceX/rockets/RESERVE_ROCKET';

export const list = (rockets) => ({ type: ROCKET, rockets });
export const reserve = (id) => ({ type: RESERVE_ROCKET, id });

const get = () => fetch(url)
  .then((response) => response.json())
  .then((rocketz) => rocketz.map((rocket) => {
    const {
      id, name, description, flickr_images: images,
    } = rocket;
    return {
      id,
      name,
      description,
      image: images[0],
      reserved: false,
    };
  }));

export const fetchRockets = createAsyncThunk(
  ROCKETS,
  async (args, thunkAPI) => {
    try {
      let rockets;
      switch (args.method) {
        case 'GET':
          rockets = await get();
          thunkAPI.dispatch(list(rockets));
          return rockets;
        default:
          return null;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error, args.method);
    }
  },
);

export default (state = [], action) => {
  switch (action.type) {
    case ROCKET:
      return action.rockets;
    case RESERVE_ROCKET:
      return state.map((rocket) => (rocket.id === action.id
        ? { ...rocket, reserved: !rocket.reserved }
        : rocket));
    default:
      return state;
  }
};
