import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material"
import { Link } from "react-router-dom"

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
                <CardMedia
                    component="img"
                    image={data?.image?.url}
                    alt={data.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                </CardContent>
            </Link>
        </CardContainer>
    );
}