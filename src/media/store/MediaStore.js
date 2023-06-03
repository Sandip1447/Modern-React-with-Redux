import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {usersReducer} from "./slices/usersSlice";
import {albumsApi} from './api/albumsApi';
import {photosApi} from "./api/photosApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware);
    },

})

// step 7 from query
setupListeners(store.dispatch);

// Step 5. Export the thunk from the store/index.js file
export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser';

// step 8 from query
export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} from './api/albumsApi';

export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} from './api/photosApi';

