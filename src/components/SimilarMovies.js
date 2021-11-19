import { styled } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import MovieCover from './MovieCover';

export default function SimilarMovies() {
    let similar = useSelector(state => state.movies?.similar)
    const [tenMovies, setTenMovies] = useState([]);
    let movieIdList = similar.map(e => {return e.substring(0, e.length - 1).replace("/title/", "")})
    

    async function newMovies() {
        for(let i = 0; i < 10; i++){
            await axios.get("https://imdb8.p.rapidapi.com/title/get-details", {
                params: {tconst: movieIdList[i]},
                headers: {
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',  
                    'x-rapidapi-key': '21689d19d5mshc80479d1ca5984ep1ab463jsnde1ce133b7fa'
                  }
            })
            .then((res) => {setTenMovies(result => [...result, res.data])})
        }
    }

    useEffect(() => {
        if(newMovies.length < 10){
            newMovies()
        }
        return () => {
            setTenMovies([]) 
          };
        // eslint-disable-next-line
    }, [similar])

    return (
        <CardContainer>
            { tenMovies.map((movie, i) => {
                    return (
                    <MovieCover key={i} data={movie} />
             )}) }
        </CardContainer>
    )
}

const CardContainer = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    '@media (max-width: 1025px)': {
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
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
