import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
        name: "auth",
        initialState: {
                register: {
                        status: null,
                        message: null
                },
                login: {
                        status: null,
                        message: null,
                }
        },
        reducers: {
                registerStart: (state) => {
                        state.register.status = 'pending';
                },
                registerSuccess: (state, action) => {
                        state.register.status = 'success';
                        state.register.message = action.payload;
                },
                registerFailed: (state, action) => {
                        state.register.status = 'failed';
                        state.register.message = action.payload;
                },

                loginStart: (state) => {
                        state.login.status = 'pending';
                },
                loginSuccess: (state, action) => {
                        state.login.status = 'success';
                        state.login.message = action.payload;
                },
                loginFailed: (state, action) => {
                        state.login.isFetching = 'failed';
                        state.login.message = action.payload;
                },
                logoutSuccess: (state) => {
                        state.register = {
                                status: null,
                                message: null
                        };
                        state.login = {
                                status: null,
                                message: null,
                        };
                        state.currentUser = null
                }
        }
})


export const {
        registerStart,
        registerSuccess,
        registerFailed,
        loginStart,
        loginSuccess,
        loginFailed,
        logoutSuccess
} = authSlice.actions;

export default authSlice.reducer;
