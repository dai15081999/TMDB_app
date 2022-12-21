import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
})

 function makeRequest(url, options) {
  return api(url, options)
    .then(res => res.data)
    .catch(error => Promise.reject(error?.response?.data?.message ?? "Error"))
}

export function addMovie({userId, movie}) {
    return makeRequest('users/favorites', {
        method: "POST",
        data: {userId, movie}
    })
}

export function getFavorites(userId) {
    return makeRequest(`http://localhost:3001/api/users/favorites/${userId}`)
}

export function detailMovie(movieId) {
    return makeRequest(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b61fac905693b1a1346dfa5b5d790449&language=en-US`)
}

export function deleteMovie({userId, movieId}) {
    return makeRequest(`users/favorites/?userId=${userId}&movieId=${movieId}`, {
        method: "DELETE"
    })
}

export function getMovie() {
    return makeRequest(`https://api.themoviedb.org/3/movie/popular?api_key=b61fac905693b1a1346dfa5b5d790449&language=en-US&page=1`)
}


export function search(value) {
    return makeRequest(`https://api.themoviedb.org/3/search/movie?api_key=b61fac905693b1a1346dfa5b5d790449&language=en-US&query=${value}&page=1&include_adult=false`)
}