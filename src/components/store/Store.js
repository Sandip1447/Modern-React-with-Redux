import {configureStore} from "@reduxjs/toolkit";
import {addSong, removeSong, songsReducer} from "./slices/songsSlice";
import {addMovie, moviesReducer, removeMovie} from "./slices/moviesSlice";
import {rest} from "./actions";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
})

export {store}
export {addSong, removeSong, addMovie, removeMovie,rest}
