import axios from "axios"

export async function getMovies(input, setMovies) {
    await axios.get("https://imdb8.p.rapidapi.com/title/find", {
        method: 'GET',
        params: { q: input },
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': '409264884dmsh3c7da52938e3624p1721ebjsn256c5cd69ddc'
        }
    })
        .then(response => setMovies(response.data.results))
        .catch(error => console.log(error))
}

export async function getReviews(id, setReviews) {
    await axios.get("https://imdb8.p.rapidapi.com/title/get-reviews", {
        params: { tconst: id },
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': '409264884dmsh3c7da52938e3624p1721ebjsn256c5cd69ddc'
        }
    })
        .then(response => setReviews(response.data.metacritic.reviews))
        .catch(error => console.log(error))
}