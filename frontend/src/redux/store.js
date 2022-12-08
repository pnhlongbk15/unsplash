import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import authReducer from "./slice/auth";
import userReducer from "./slice/user";

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer
    },
    middleware: [logger],
    devTools: process.env.NODE_ENV === 'development',
})