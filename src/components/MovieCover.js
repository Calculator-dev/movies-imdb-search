import { CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import noimage from "../assets/noimage.png"

const CardImg = styled(CardMedia)({
    height: "600px"
})



export default function MovieCover({image, title}) {
    return (
        <div>
            {!image ? <CardImg
                    component="img" 
                    image={noimage}
                /> : <CardImg
                    component="img"
                    image={image}
                />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
        </div>
    )
}