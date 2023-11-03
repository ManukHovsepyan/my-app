import { configureStore, Middleware } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import counterSlice from './counterSlice';
import productSlice from './productSlice';
import authSlice from './authSlice';
import authMiddleware from './authMiddleware'; // Import the authMiddleware

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    app: appReducer,
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    const customMiddleware = authMiddleware as Middleware;

    return defaultMiddleware.concat(customMiddleware);
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
