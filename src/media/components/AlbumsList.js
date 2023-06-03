import {useAddAlbumMutation, useFetchAlbumsQuery} from "../store/MediaStore"
import Skeleton from "./Skeleton";
import Button from "../../orgnization/elements/Button";
import AlbumsListItem from "./AlbumsListItem";

/*
* Creating a RTK Query API
*  1. identify all the different kinds of requests that our application needs to make.And we're going to try to group them together in some way.
*
*  2. make a new file that's going to create or contain that API.
*
*  3. THE API needs to store a ton of state related to data,
*  request status,errors. Add a 'reducerPath'
*
*  4. The API needs to know how and where to send request.
* Add a 'baseQuery'
*
*  5. Add 'endpoints', one for each kind of request yu want to make.
*  Request that read data are queries, write data are mutations
*
*  6. Export all of the automatically generated hooks
*  7. Connect the API to the store. Reducer, middleware, and listeners
*  8. Export the hooks from the store/index.js file
*
* */
function AlbumsList({user}) {

    // Argument to pass the query function
    const {data, error, isFetching} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAlbumAdd = () => {
        addAlbum(user)
    }

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className="h-10 w-full"/>;
    } else if (error) {
        content = <div>Error fetching albums.</div>;
    } else {
        content = data.map((album) => {
            return <AlbumsListItem key={album.id} album={album}/>
        });
    }

    return <div>

        <div className="m-2 flex flex-row items-center justify-between">
            <h4 className="text-lg font-bold">Albums for {user.name}</h4>
            <Button loading={results.isLoading} onClick={handleAlbumAdd}>
                + Add Album
            </Button>
        </div>

        <div> {content}</div>

    </div>;
}

export default AlbumsList;
