import React from 'react'
import MovieCover from './MovieCover'
import MovieDetails from './MovieDetails'

export default function DetailsScreen() {
    return (
        <div>
            <div>
                <MovieCover />
            </div>
            <div>
                <MovieDetails />
            </div>
        </div>
    )
}
