import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    details: [],
    genres: [],
    reviews: [],
    awards: [],
    release: [],
    movies: [],
    similar: [],
    loading: null
}

export const getMovies = createAsyncThunk("movies/getMovies", async (input) => {
    return await axios.get("https://imdb8.p.rapidapi.com/auto-complete", {
    params: {q: input},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',  
      'x-rapidapi-key': 'ebbe8b8f73mshe55e467c001f89bp141abejsn5915d621088d'
    }    
    })
    .then((response) => console.log(response))
   
})

export const getAwards = createAsyncThunk("movies/getAwards", async (id) => {
    const response = await axios.get("https://imdb8.p.rapidapi.com/title/get-awards", {
    params: {tconst: id},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',  
      'x-rapidapi-key': '21689d19d5mshc80479d1ca5984ep1ab463jsnde1ce133b7fa'
    }    
    })
   return response?.data?.resource?.awards?.length
})

export const getDetails = createAsyncThunk("movies/getDetails", async (id) => {
    const response = await axios.get("https://imdb8.p.rapidapi.com/title/get-details", {
    params: {tconst: id},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',  
      'x-rapidapi-key': '21689d19d5mshc80479d1ca5984ep1ab463jsnde1ce133b7fa'
    }    
    })
   return response?.data
})

export const getReviews = createAsyncThunk("movies/getReviews", async (id) => {
    const response = await axios.get("https://imdb8.p.rapidapi.com/title/get-reviews", {
    params: {tconst: id},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',  
      'x-rapidapi-key': '21689d19d5mshc80479d1ca5984ep1ab463jsnde1ce133b7fa'
    }    
    })
   return response?.data
})

export const getGenres = createAsyncThunk("movies/getGenres", async (id) => {
    const response = await axios.get("https://imdb8.p.rapidapi.com/title/get-genres", {
    params: {tconst: id},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',  
      'x-rapidapi-key': '21689d19d5mshc80479d1ca5984ep1ab463jsnde1ce133b7fa'
    }    
    })
   return response?.data
})

export const getReleases = createAsyncThunk("movies/getReleases", async (id) => {
    const response = await axios.get("https://imdb8.p.rapidapi.com/title/get-releases", {
    params: {tconst: id},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',  
      'x-rapidapi-key': '21689d19d5mshc80479d1ca5984ep1ab463jsnde1ce133b7fa'
    }    
    })
   return response?.data
})

export const getSimilarMovies = createAsyncThunk("movies/getSimilarMovies", async (id) => {
    const response = await axios.get("https://imdb8.p.rapidapi.com/title/get-more-like-this", {
    params: {tconst: id},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',  
      'x-rapidapi-key': '21689d19d5mshc80479d1ca5984ep1ab463jsnde1ce133b7fa'
    }    
    })

   return response?.data
})

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.loading = "loading";
        },
        [getMovies.fulfilled]: (state, {payload}) => {
            return {...state, movies: payload};
        },
        [getMovies.rejected]: (state) => {
            state.loading = "rejected";
        },
        [getAwards.fulfilled]: (state, {payload}) => {
            return {...state, awards: payload}
        },
        [getDetails.fulfilled]: (state, {payload}) => {
            return {...state, details: payload}
        },
        [getReviews.fulfilled]: (state, {payload}) => {
            return {...state, reviews: payload}
        },
        [getGenres.fulfilled]: (state, {payload}) => {
            return {...state, genres: payload}
        },
        [getReleases.fulfilled]: (state, {payload}) => {
            return {...state, release: payload}
        },
        [getSimilarMovies.fulfilled]: (state, {payload}) => {
            return {...state, similar: payload}
        }
    }
})

export default movieSlice.reducer 