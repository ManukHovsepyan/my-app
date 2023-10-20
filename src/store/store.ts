// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import counterSlice from './counterSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    counter: counterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
