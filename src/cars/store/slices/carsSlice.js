import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            state.data.push({
                id: uuid().slice(0, 8),
                name: action.payload.name,
                cost: action.payload.cost,
            })
        }
        , removeCar(state, action) {
            state.data = state.data.filter((car) => {
                return car.id !== action.payload
            })
        }

    }
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer


