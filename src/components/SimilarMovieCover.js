import { Typography, CardMedia } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import noimage from "../assets/noimage.png"

const MovieIMG = styled(CardMedia)({
    width: "150px",
    height: "250px",
    '@media (max-width: 600px)': {
        width: "120px",
        height: "230px"
    },
    '@media (max-width: 1440px)': {
        width: "120px",
        height: "230px"
    },
    '@media (max-width: 1024px)': {
        width: "80px",
        height: "150px"
    },
    '@media (max-width: 768px)': {
        width: "110px",
        height: "160px"
    }
})

const Container = styled("div")({
    marginLeft: "20px",
    marginTop: "20px",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
     "&:hover": {

      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
})

export default function SimilarMovieCover({data}) {


    return (
        <Container>
            <Link to={`/movie${data.id}`} style={{ textDecoration: "none" }}>
            {!data ? <MovieIMG
                    component="img" 
                    image={noimage}
                /> : <MovieIMG
                    component="img"
                    image={data?.image?.url}
                />}
                <Typography variant="body2" >{data.title}</Typography>
            </Link>
        </Container>
    )
}
