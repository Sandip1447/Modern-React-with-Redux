import {Provider} from "react-redux"
import {carStore} from "./CarStore"
import CarIndex from "../CarIndex";

function CarProvider() {
    return (
        <Provider store={carStore}>
            <CarIndex/>
        </Provider>
    )
}

export default CarProvider