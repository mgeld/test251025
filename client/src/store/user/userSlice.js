import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: 'Ансар', loggedIn: false };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.name = action.payload
            state.loggedIn = true
        },
        logout(state) {
            state.name = ''
            state.loggedIn = false
        },
    }
})

userSlice.actions.login() // { type: 'user/login', payload: 'Ansar'}
userSlice.reducer