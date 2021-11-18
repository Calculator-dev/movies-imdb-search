import React from 'react'
import {  styled, Typography} from "@mui/material"
import {  useSelector } from 'react-redux'
import SimilarMovies from './SimilarMovies'
import HeaderDetails from './HeaderDetails'

export default function MovieDetails() {
    const awards = useSelector(state => state.movies?.awards)
    const details = useSelector(state => state.movies?.details)
    const reviews = useSelector(state => state.movies?.reviews)
    const genres = useSelector(state => state.movies?.genres)
    const release = useSelector(state => state.movies?.release)

    return (
        <div>
                <HeaderDetails />
            <MainContainer >
                <IMGDiv>
                    <Image src={details?.image?.url} alt="movie" />
                    <Typography children={details.title} variant="h5" />
                </IMGDiv>
                <ContentDiv>
                     <Typography>Review: {reviews?.metacritic?.reviews[0]?.quote}</Typography>
                    <br/>
                     <Typography>Reviewer: {reviews?.metacritic?.reviews[0]?.reviewer}</Typography>
                    <br/>
                     <Typography>Awards: {awards} </Typography> 
                    <br/>
                      <Typography>Genres: {genres.join(", ")}</Typography>
                    <br />
                    <Typography>Release: {release[0]?.date}</Typography>
                </ContentDiv>
            </MainContainer>
           <SimilarMovies />
        </div>
    )
}

const MainContainer = styled("div")({
    display: "flex",
    // '@media (max-width: 1025px)': {
    //     flexDirection: "column"
    // },
    '@media (max-width: 600px)': {
        flexDirection: "column"
    },
})

const IMGDiv = styled("div")({
    padding: "20px"
})

const ContentDiv = styled("div")({
    padding: "20px",
    width: "80%"
})

const Image = styled("img")({
    height: "450px",
    width: "300px"
})