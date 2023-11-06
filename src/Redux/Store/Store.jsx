import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Users/Users";

export const store  = configureStore({
    reducer: {
        users: userReducer
    }
})