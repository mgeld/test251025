import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter/counterSlice';
import { userSlice } from './user/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer
    }
});