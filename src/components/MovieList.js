import React from 'react'
import { styled } from "@mui/material"
import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"

const CardContainer = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    padding: "20px 20px 20px 40px",
    textAlign: "left",
    marginBottom: "20px",
    marginLeft: "20px",
    '@media (max-width: 1025px)': {
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "20px 15px 10px 5px"
    },
    '@media (max-width: 1440px)': {
        padding: "20px 30px 0 0",
    },
    '@media (max-width: 600px)': {
        gridTemplateColumns: "1fr"
    },
    '@media (max-width: 1600px)': {
        padding: "20px 35px 10px 0"
    },
})



export default function MovieList() {
    const movies = useSelector(state => state.movies.movies)
    const newMovies = movies.filter((movie) => movie.id.startsWith('/t'));

    return (
        <CardContainer>
            {newMovies.map((movie, i) => {
                return <MovieCard data={movie} key={i} />
            })}
        </CardContainer>
    )
}