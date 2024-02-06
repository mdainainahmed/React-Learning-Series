import { configureStore } from "@reduxjs/toolkit";
import authReducers from './features/auth/authSlice';

export const store = configureStore({
  reducer: authReducers,
});
