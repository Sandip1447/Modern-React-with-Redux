import {Provider} from "react-redux";
import {store} from "./store/MediaStore"
import MediaIndex from "./page/MediaIndex";

function MediaStarter() {
    return (
        <Provider store={store}>
            <MediaIndex/>
        </Provider>
    )

}

export default MediaStarter