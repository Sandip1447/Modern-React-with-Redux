import {configureStore} from '@reduxjs/toolkit'

import {carsReducer, addCar, changeSearchTerm, removeCar} from './slices/carsSlice'
import {changeCost, changeName, formReducer} from './slices/formSlice'

const carStore = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

console.log(carStore.getState())

export {
    carStore,
    changeName,
    changeCost,
    changeSearchTerm,
    addCar,
    removeCar
}
