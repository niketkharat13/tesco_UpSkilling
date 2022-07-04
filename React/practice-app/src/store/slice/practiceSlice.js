import { createSlice } from "@reduxjs/toolkit";
import {getData } from '../action/practice-reducer';

const initialState = {
    counter: 0,
    loader: false,
    error: null,
    posts: []
}

const practiceSlice = createSlice({
    name: 'pr',
    initialState,
    reducers: {
        INCREMENT(state) {
            state.counter = state.counter + 1
        },
        DECREMENT(state) {
            state.counter = state.counter - 1
        },
        SAVEDATA(state, action) {
            console.log(state, action)
        },
        EROR(state, action) {
            console.log(action);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.loader = false;
            state.posts = state.posts.concat(action.payload)
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error
        })
        builder.addCase(getData.pending, (state, action) => {
            state.loader = true
        })
    }
})

export const { INCREMENT, DECREMENT, SAVEDATA } = practiceSlice.actions;

export default practiceSlice.reducer;