export async function GetGenres(api) {
    try {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&sort_by=release_date.desc`;
        const response = await fetch(url);
        if (response.ok) {
            const genresData = await response.json();
            const genres = {};
            genresData.genres.forEach(genre => {
                genres[genre.id] = genre.name;
            });
            return genres;
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }

}