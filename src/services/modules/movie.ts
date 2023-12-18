import { getAllMovies, setUserData } from '@/store/local';
import { api } from '../api';

export type User = {
  id: number;
  name: string;
};

// Define your custom headers
const customHeaders = {
    Accept: 'application/json',
    'Content-Type': "application/json",
  };
  


export const userApi = api.injectEndpoints({
reducerPath: 'movie',
  endpoints: builder => ({
    // create user
    FetchAllMovies: builder.query({
        query: () => ({
          url: 'movie/AllMovies',
          method: 'get',
        }),
        transformResponse: (result) => result,
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
       
          try {
            const { data } = await queryFulfilled;
            dispatch(getAllMovies(data));
          } catch (error) {
            /* empty */
          }
        },
      }),
  }),
  overrideExisting: true,
});

export const { 
 useFetchAllMoviesQuery
  } = userApi;
