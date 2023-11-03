import { Middleware } from '@reduxjs/toolkit';
import { loginUser } from './authSlice';

const authMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === loginUser.fulfilled.type) {
    const payload = action.payload;
    if (payload && payload.status === 'success' && payload.data.accessToken) {
      localStorage.setItem('jwtToken', payload.data.accessToken);
    }
  }

  return next(action);
};

export default authMiddleware;
