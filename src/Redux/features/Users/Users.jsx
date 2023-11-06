import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Dave Patrick", email: "dave@gmail.com" },
  { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" },
  { id: "3", name: "Thomas Gasangwa", email: "thomas@gmail.com" },
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export default userSlice.reducer;