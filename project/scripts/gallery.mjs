import { fetchMoviesPages, displayFilm } from "./films.mjs";
import { GetGenres } from "./genres.mjs";

const apiKey = '1afba35e0cdf8ca762b80141ce50d741';
const gallery = document.querySelector('#gallery');
const genreFiltersDiv = document.querySelector('#genre-filters');
let allMovies = [];
let genresMap = {};

async function loadGallery() {
    try {
        allMovies = await fetchMoviesPages(apiKey);
        genresMap = await GetGenres(apiKey);
        displayFilm(allMovies, gallery)
        createGenreFilters(allMovies, genresMap);
    } catch (error) {
        console.error('Error loading movies:', error);
    }
}

function createGenreFilters(movies, genresMap) {
    genreFiltersDiv.innerHTML = '';

    const genreIdsInMovies = [];

    movies.forEach(movie => {
        movie.genre_ids.forEach(id => {
            if (!genreIdsInMovies.includes(id)) {
                genreIdsInMovies.push(id);
            }
        });
    });
    genreIdsInMovies.forEach(id => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = genresMap[id];
        genreFiltersDiv.appendChild(link);
        link.addEventListener('click', () => {
            const genreId = Number(id);
            const filteredMovies = allMovies.filter(movie => movie.genre_ids.includes(id));
            displayFilm(filteredMovies, gallery);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
});