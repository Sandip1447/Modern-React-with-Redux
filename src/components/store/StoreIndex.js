import SongPlaylist from "./elements/SongPlaylist";
import MoviePlaylist from "./elements/MoviePlaylist";
import {useDispatch} from "react-redux"
import { rest} from "./Store"

function StoreIndex() {

    const dispatch = useDispatch()
    const handleResetClick = () => {
        dispatch(rest())
    };

    return (
        <div className="container is-fluid">
            <button onClick={() => handleResetClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr/>
            <MoviePlaylist/>
            <hr/>
            <SongPlaylist/>
        </div>
    )
}

export default StoreIndex