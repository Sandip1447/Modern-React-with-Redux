import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/usersSlice";
import {albumsApi} from './api/albumsApi';
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware);
    },

})

// step 7 from query
setupListeners(store.dispatch);

// Step 5. Export the thunk from the store/index.js file
export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser';

// step 8 from query
export { useFetchAlbumsQuery } from './api/albumsApi';

