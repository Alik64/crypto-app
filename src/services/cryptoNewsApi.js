import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const cryptoNewsHeaders = {
    'Accept-language': 'fr',
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.REACT_APP_X_RAPIDAPI_NEWS_HOST,
    'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_NEWS_KEY
}
const createRequest = url => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&Market=fr-Fr&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })

})

export const { useGetCryptoNewsQuery } = cryptoNewsApi