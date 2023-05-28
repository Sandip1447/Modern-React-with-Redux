import StoreIndex from "./StoreIndex";
import {store} from "./Store"
import {Provider} from "react-redux"

function StoreProvider() {
    return (
        <Provider store={store}>
            <StoreIndex/>
        </Provider>
    )
}

export default StoreProvider