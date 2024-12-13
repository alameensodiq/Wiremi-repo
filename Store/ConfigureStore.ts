import { LoginSlice } from './Reducers/Login';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    logins: LoginSlice?.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
