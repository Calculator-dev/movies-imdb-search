import React, { useState, useEffect } from 'react'
import Header from "./Header"
import { Paper, styled, Typography } from "@mui/material"
import { useParams } from 'react-router'
import { getReviews } from './api/api'
import { addReviews } from '../slices/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'

const MainContainer = styled(Paper)({
    display: "flex",
})

const IMGDiv = styled("div")({
    padding: "20px"
})

const ContentDiv = styled("div")({
    padding: "20px",
    display: "inline-block"
})

export default function MovieDetails() {
    const { id } = useParams()
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (id) getReviews(id, setReviews)
    }, [id])

    return (
        <div>
            <Header />
            <MainContainer>
                <IMGDiv style={{ border: "1px solid red" }}>

                </IMGDiv>
                <ContentDiv style={{ border: "1px solid green" }}>
                    <Typography>Review: {reviews[0]?.quote}</Typography>
                    <Typography>Reviewer: {reviews[0]?.reviewer}</Typography>
                </ContentDiv>
            </MainContainer>
        </div>
    )
}
