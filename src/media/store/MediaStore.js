import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
})

// Step 5. Export the thunk from the store/index.js file
export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser';

