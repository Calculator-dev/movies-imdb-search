import React from 'react'
import Header from './Header'
import MovieList from "./MovieList"

export default function MainScreen() {


    return (
        <div style={{ height: "100vh", background: "#DBF6E9" }}>
            <Header />
            <MovieList />
        </div>
    )
}
