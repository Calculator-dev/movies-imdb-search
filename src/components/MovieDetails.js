import React, { useEffect} from 'react'
import Header from "./Header"
import {  styled, Typography} from "@mui/material"
import { useParams } from 'react-router'
import { getAwards, getDetails, getGenres, getReviews, getReleases, getSimilarMovies} from '../slices/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'
import SimilarMovies from './SimilarMovies'

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

export default function MovieDetails() {
    const {id} = useParams()
    const dispatch = useDispatch();
    const awards = useSelector(state => state.movies?.awards)
    const details = useSelector(state => state.movies?.details)
    const reviews = useSelector(state => state.movies?.reviews)
    const genres = useSelector(state => state.movies?.genres)
    const release = useSelector(state => state.movies?.release)
    
    useEffect(() => {
        if(id) dispatch(getAwards(id)) 
        if(id) dispatch(getDetails(id))
        if(id) dispatch(getReleases(id))
        setTimeout(() => {
            if(id) dispatch(getReviews(id))
            if(id) dispatch(getGenres(id))
            
        }, 1000);
        setTimeout(() => {
            
            if (id) dispatch(getSimilarMovies(id))
        }, 1500);
    }, [dispatch, id])

    return (
        <div>
            <Header />
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