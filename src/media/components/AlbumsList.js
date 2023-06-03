import {useFetchAlbumsQuery} from "../store/MediaStore"

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

    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    console.log(data, error, isLoading);


    return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
