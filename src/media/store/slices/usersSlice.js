import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../thunks/fetchUsers";
import {addUser} from "../thunks/addUser";
import {removeUser} from "../thunks/removeUser";


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

        // Add user
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.data.push(action.payload)
        })
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })

        // remove user

        builder.addCase(removeUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id;
            });
        });
        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });


    }

})

export const usersReducer = usersSlice.reducer