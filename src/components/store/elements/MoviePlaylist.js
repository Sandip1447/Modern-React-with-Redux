import {createRandomMovie} from "../data";
import Button from "../../orgnization/elements/Button";
import {useDispatch, useSelector} from "react-redux";
import {addMovie, removeMovie} from "../Store";

function MoviePlaylist() {
    const dispatch = useDispatch()
    // Get list of movies
    const moviePlaylist = useSelector((state) => {
        return state.movies
    });

    const handleMovieAdd = (movie) => {
        const action = addMovie(movie)
        dispatch(action)
        // Add movie to list of movies
    };
    const handleMovieRemove = (movie) => {
        const action = removeMovie(movie)
        dispatch(action)
        // Remove movie from list of movies
    };

    const renderedMovies = moviePlaylist.map((movie) => {
        return (
            <li key={movie}>
                {movie}
                <Button
                    onClick={() => handleMovieRemove(movie)}
                    danger outline
                >
                    X
                </Button>
            </li>
        );
    });

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Movie Playlist</h3>
                <div className="buttons">
                    <Button
                        onClick={() => handleMovieAdd(createRandomMovie())}
                        primary
                    >
                        + Add Movie to Playlist
                    </Button>
                </div>
            </div>
            <ul>{renderedMovies}</ul>
        </div>
    );
}

export default MoviePlaylist;
