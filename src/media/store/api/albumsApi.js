import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//Config file for adding API calls
const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),

    /*
    *  Endpoints
    * 1. What's the goal
    * 2. Give a simplified name
    * 3. Is this a query or a mutation?
    * 4. What's the path for this request, relative to the baseUrl?
    * 5. What's the query string for this request?
    * 6. What's the method for this request?
    * 7. What's the body for this request?
    * */
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id,
                        },
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const {useFetchAlbumsQuery} = albumsApi;
export {albumsApi};
