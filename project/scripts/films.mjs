import { GetGenres } from "./genres.mjs";
import { getFavorites, loadFavorites } from "./favorite-movies.js";

const releases = document.querySelector('#releases') || document.createElement('div');
const upcoming = document.querySelector('#upcoming') || document.createElement('div');
const favorite = document.querySelector('#favorite') || document.createElement('div');

const apiKey = '1afba35e0cdf8ca762b80141ce50d741';
const releasesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&sort_by=release_date.desc`;
const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
const allUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

export async function main() {
    try {
        const response = await fetch(allUrl);
        const releasesResponse = await fetch(releasesUrl);
        const upcomingResponse = await fetch(upcomingUrl);

        if (response.ok) {
            const data = await response.json();
            const releasesData = await releasesResponse.json();
            const upcomingData = await upcomingResponse.json();
            const upcomingFilmsFiltered = upcomingData.results.filter(film => {
                return !releasesData.results.some(nowPlayingFilm => nowPlayingFilm.id === film.id)
            });

            const filteredFavorite = data.results.filter(film => getFavorites().includes(film.title))

            displayFilm(releasesData.results, releases);
            displayFilm(upcomingFilmsFiltered, upcoming);
            displayFilm(filteredFavorite, favorite)
        } else {
            throw Error(await response.text());
        }

        const genresMap = await GetGenres(apiKey);
        loadFavorites();

    }
    catch (error) {
        console.log(error);
    }
}

main();

export async function fetchMoviesPages(apikey) {
    const allMovies = [];
    for (let page = 1; page <= 5; page++) {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            allMovies.push(...data.results);
        } else {
            throw Error(await response.text());
        }
    }
    return allMovies
}

export async function displayFilm(films, tipe) {
    if (!tipe) {
        console.error('"Type" container is null or indefined');
        return;
    }
    tipe.innerHTML = '';
    const genres = await GetGenres(apiKey);
    films.forEach(film => {
        const figure = document.createElement('figure')
        figure.innerHTML = `
        <h3>${film.title}</h3>
        <button class='open-button' popovertarget='${film.id}'>
            <img class='post' src='https://image.tmdb.org/t/p/w500${film.poster_path}' alt='${film.title} poster' loading='lazy'>
        </button>
        <figcaption>⭐${Number(film.vote_average).toFixed(1)}/10
        <button class='favorite-button'>🤍</button></figcaption>
        <dialog class='modal' id='${film.id}' popover>
            <div class='info'>
                <button class='close-button' popovertarget='${film.id}' popovertargetaction='hide'>✖</button>
                <h3>${film.title}</h3>
                    <img src='https://image.tmdb.org/t/p/w500${film.backdrop_path}' loading='lazy'>
                <p>${film.overview}</p>
                <div id='genres-${film.id}'></div>
            </div>
        </dialog>`;

        tipe.appendChild(figure);

        const genresDiv = figure.querySelector(`#genres-${film.id}`);
        genresDiv.innerHTML = '';
        if (film.genre_ids && Array.isArray(film.genre_ids)) {
            film.genre_ids.map(genre => {
                const g = document.createElement('a');
                g.setAttribute('href', `./gallery.html#${genre}`);
                g.textContent = genres[genre];
                genresDiv.appendChild(g);
            });
        }
    });

};