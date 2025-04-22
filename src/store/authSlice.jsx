import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    user : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser(state, action){
            const userData = action.payload;
            state.user = userData;
            // console.log(2,JSON.parse(JSON.stringify(state)));
        },
        removeUser(state){
            state.user = null;
        }
    }
})

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;