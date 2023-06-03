import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../thunks/fetchUsers";


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    extraReducers: (builder) => {

        /*So, Redux Toolkit, in order to help,
         you not have to write out that action type manually when you
create the thunk back
inside of fetch users when you create this thing.*/
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }

})

export const usersReducer = usersSlice.reducer