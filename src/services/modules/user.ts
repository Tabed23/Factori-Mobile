
import { setUser } from '@/store/auth';
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
reducerPath: 'authApis',
  endpoints: builder => ({
    // create user
    createUser: builder.mutation({
        query: (data) => ({
          url: 'user/signup',
          method: 'post',
          headers: customHeaders,
          body: data,
        }),
        transformResponse: (result) => result,
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setUser(data));
          } catch (error) {
            /* empty */
          }
        },
      }),
      // login user
      loginUser: builder.mutation({
        query: (data) => ({
          url: 'user/login',
          method: 'post',
          headers: customHeaders,
          body: data,
        }),
        transformResponse: (result) => result,
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            
            const { data } = await queryFulfilled;
            
            dispatch(setUser(data));
          } catch (error) {
            /* empty */
          }
        },
      }),
 
      //Add Card
      addCard:builder.mutation({
        query:(data)=>({
          url:'user/addCard',
          method:'post',
          headers:customHeaders,
          body:data,
        }),
        transformResponse: (result) => result,
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            
            const { data } = await queryFulfilled;
            
          } catch (error) {
            /* empty */
          }
        },
      })


  }),
  overrideExisting: true,
});

export const { 
    useLoginUserMutation,
    useCreateUserMutation,
    useAddCardMutation,
  } = userApi;
