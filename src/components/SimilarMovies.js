import { CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import SimilarMovieCover from './SimilarMovieCover';

export default function SimilarMovies({getMovieInfo}) {
    let similar = useSelector(state => state.movies?.similar)
    const [tenMovies, setTenMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    let movieIdList = similar.map(e => {return e.substring(0, e.length - 1).replace("/title/", "")})
    

    async function newMovies() {
        for(let i = 0; i < 10; i++){
            await axios.get("https://imdb8.p.rapidapi.com/title/get-details", {
                params: {tconst: movieIdList[i]},
                headers: {
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',  
                    'x-rapidapi-key': '7e21433176msh7e2242fdde2b9e1p1d26d2jsn128115f99941'
                  }
            })
            .then((res) => {setTenMovies(result => [...result, res.data])})
            setLoading(true)
        }
    }

    useEffect(() => {
        if(newMovies.length < 10){
            newMovies()
        }
        // eslint-disable-next-line
    }, [similar])

    return (
        <CardContainer>
            {loading ? tenMovies.map((movie, i) => {
                    return (
                    <SimilarMovieCover key={i} data={movie} getMovieInfo={getMovieInfo}/>
             )}) : <CircularProgress />}
        </CardContainer>
    )
}

const CardContainer = styled("div")({
    width: "150px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    marginLeft: "100px",
    '@media (max-width: 1025px)': {
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        marginLeft: "0px",
    },
    '@media (max-width: 1440px)': {
        marginLeft: "0px"
    },
    '@media (max-width: 600px)': {
        gridTemplateColumns: "1fr 1fr 1fr",
        marginLeft: "0px"
    },
    '@media (max-width: 768px)': {
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        marginLeft: "50px"
    },
    '@media (max-width: 425px)': {
        gridTemplateColumns: "1fr 1fr 1fr",
        marginLeft: "0"
    },
})
