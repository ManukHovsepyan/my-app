import { createSlice } from '@reduxjs/toolkit';

interface appState {
  count: number;
}

const initialState: appState = {
  count: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {

  },
});

export default appSlice.reducer;
