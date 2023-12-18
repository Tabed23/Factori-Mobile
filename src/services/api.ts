import {
    BaseQueryFn,
    FetchArgs,
    createApi,
    fetchBaseQuery,
    FetchBaseQueryError,
  } from '@reduxjs/toolkit/query/react';
  
  
  const baseQueryWithInterceptor: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
    }
    return result;
  };


  const baseQuery = fetchBaseQuery({
    baseUrl:'http://192.168.192.86:3000/api/v1/', // Set your API base URL here
    prepareHeaders: (headers, { getState }) => {
      const { auth } = getState();
      headers.set('Authorization', `Bearer ${auth?.user?.token}`);
    },
  });
  
  export const api = createApi({
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({}),
  });
  