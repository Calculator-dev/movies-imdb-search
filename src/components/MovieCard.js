import * as React from 'react';
import Card from '@mui/material/Card';
import { CircularProgress, styled } from "@mui/material"
import { Link } from "react-router-dom"
import MovieCover from './MovieCover';

const CardContainer = styled(Card)({
    marginBottom: "20px",
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
})

export default function MovieCard({ data }) {
    return (
        <CardContainer sx={{ maxWidth: 345 }}>
            <Link to={`/movie${data.id}`} style={{ textDecoration: "none" }}>
            {!data ? <CircularProgress /> : <MovieCover 
            image={data?.image?.url} 
            title={data.title}
            />}
            </Link>
        </CardContainer>
    );
}