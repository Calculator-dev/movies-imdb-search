import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: [],
    reviews: [],
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        addReviews: (state, { payload }) => {
            state.reviews = payload
        }
    }
})

export const { addMovies, addReviews } = movieSlice.actions;
export default movieSlice.reducer