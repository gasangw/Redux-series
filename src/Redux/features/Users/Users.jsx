import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Dave Patrick", email: "dave@gmail.com" },
  { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" },
  { id: "3", name: "Thomas Gasangwa", email: "thomas@gmail.com" },
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
           return state.filter(user => user.id !== action.payload) 
        }
    }
})

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;