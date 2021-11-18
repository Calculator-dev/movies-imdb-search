import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import noimage from "../assets/noimage.png"
import { getAwards, getDetails, getGenres, getReleases, getReviews, getSimilarMovies } from '../slices/MovieSlice'
import { useDispatch } from 'react-redux'


export default function MovieCover({data}) {
    const dispatch = useDispatch()
    const id = data.id.slice(7,16)

    const getMovieInfo = () => {
        const thirdDelay = setTimeout(() => {

            dispatch(getDetails(id))
            dispatch(getSimilarMovies(id))
        }, 500)
    const firstDelay = setTimeout(() => {
        dispatch(getReviews(id))
        dispatch(getAwards(id)) 
    }, 1500);
    const secondDelay = setTimeout(() => { 
        dispatch(getReleases(id))
        dispatch(getGenres(id))
    }, 2500);

    return () => {
        clearTimeout(firstDelay)
        clearTimeout(secondDelay)
        clearTimeout(thirdDelay)
    }
   }
    
    return (
            
            <CardContainer onClick={() => getMovieInfo()}>
                <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
                {!data?.image?.url ? <CardImg
                        component="img" 
                        image={noimage}
                    /> : <CardImg
                        component="img"
                        image={data?.image?.url}
                    />}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                    </CardContent>
                    </Link>
            </CardContainer>  
    )
}

const CardImg = styled(CardMedia)({
    height: "600px"
})

const CardContainer = styled(Card)({
    marginBottom: "20px",
    marginLeft: "10px",
    '@media (max-width: 992px)': {
        marginLeft: "10px"
    },
    '@media (max-width: 1024px)': {
        marginLeft: "10px"
    },
    '@media (max-width: 1450px)': {
        marginLeft: "20px"
    },
    '@media (max-width: 1600px)': {
        marginLeft: "20px"
    },
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
     "&:hover": {

      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
})