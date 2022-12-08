import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
        name: "user",
        initialState: {
                isLoading: true,
                Loaded: false,
                currentUser: null
        },
        reducers: {
                getMeStart: (state) => {
                        state.isLoading = true;
                        state.Loaded = false
                },
                getMeSuccess: (state, action) => {
                        state.isLoading = false;
                        state.Loaded = true;
                        state.currentUser = action.payload;
                },
                getMeFailed: (state) => {
                        state.isLoading = false;
                        state.Loaded = true
                }
        }
})


export const {
        getMeStart,
        getMeSuccess,
        getMeFailed
} = authSlice.actions;

export default authSlice.reducer;
