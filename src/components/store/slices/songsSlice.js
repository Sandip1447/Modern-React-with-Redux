import {createSlice} from "@reduxjs/toolkit";
import {rest} from "../actions";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            // action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(rest, (state, action) => {
            return []
        })
    }
})

export const {addSong, removeSong} = songsSlice.actions

export const songsReducer = songsSlice.reducer