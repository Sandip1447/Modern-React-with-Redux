import {createRandomSong} from "../data";
import {useDispatch, useSelector} from "react-redux"
import {addSong ,removeSong} from "../Store";
import Button from "../../orgnization/elements/Button";

function SongPlaylist() {
    const dispatch = useDispatch()

    // Get list of songs
    const songPlaylist = useSelector((state) => {
        return state.songs
    });

    const handleSongAdd = (song) => {
        // Add song to list of songs
        const action = addSong(song)
        console.log(action)
        dispatch(action)

    };
    const handleSongRemove = (song) => {
        // Remove song from list of songs
        const action =removeSong(song)
        dispatch(action)
    };

    const renderedSongs = songPlaylist.map((song) => {
        return (
            <li key={song}>
                {song}
                <Button
                    onClick={() => handleSongRemove(song)}
                    danger
                >
                    X
                </Button>
            </li>
        );
    });

    return (
        <div>
            <div>
                <h3>Song Playlist</h3>
                <div>
                    <Button
                        onClick={() => handleSongAdd(createRandomSong())} primary>
                        + Add Song to Playlist
                    </Button>
                </div>
            </div>
            <ul>{renderedSongs}</ul>
        </div>
    );
}

export default SongPlaylist;