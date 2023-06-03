import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {faker} from '@faker-js/faker'

//Config file for adding API calls


// DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        fetchFn: async (...args) => {
            // REMOVE FOR PRODUCTION
            await pause(1000);
            return fetch(...args);
        },
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
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{type: 'Album', id: album.id}];
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE',
                    };
                },
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{type: 'UsersAlbums', id: user.id}];
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName(),
                        },
                    };
                },
            }),
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map((album) => {
                        return {type: 'Album', id: album.id};
                    });
                    tags.push({type: 'UsersAlbums', id: user.id});
                    return tags;
                },
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

export const {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} = albumsApi;

export {albumsApi};
