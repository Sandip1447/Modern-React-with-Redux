import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


/**
 * 1. Create a new file for your thunk.
 * Name it after the purpose of the request
 *
 * 2. Create the thunk.
 * Give it base tye that describes thr purpose of the request.
 *
 * 3. In the thunk, make the request ,
 * return thr data that you want to use in the reducer
 *
 * 4. In the slice, add extraReducers,
 * watching for the action tyes made by the thunk
 *
 * 5. Export the thunk from the store/index.js file
 *
 *
 * */
const fetchUsers = createAsyncThunk('users/fetch',
    async () => {

        const response = await axios.get("http://localhost:3001/users");
        await pause(1000)

        return response.data
    })

// Only in dev not to production
const pause = (duration) => {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}


export {fetchUsers}
