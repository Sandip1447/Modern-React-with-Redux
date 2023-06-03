import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';
import Button from "../../orgnization/elements/Button";
import {useAddPhotoMutation, useFetchPhotosQuery} from "../store/MediaStore";

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
function PhotosList({album}) {
    const {data, isFetching, error} = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    let content;
    if (isFetching) {
        content = <Skeleton className="h-8 w-8" times={4}/>;
    } else if (error) {
        content = <div>Error fetching photos.</div>;
    } else {
        content = data.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo}/>;
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">
                {content}
            </div>
        </div>
    );
}

export default PhotosList;
