export function getFavorites() {
    const favs = localStorage.getItem('favoriteMovies');
    if (favs) {
        return JSON.parse(favs);
    } else {
        return [];
    }
}

function saveFavorites(favs) {
    localStorage.setItem('favoriteMovies', JSON.stringify(favs));
}

export function loadFavorites() {
    const favorites = getFavorites();
    document.querySelectorAll('figure').forEach(figure => {
        const btn = figure.querySelector('.favorite-button');
        const title = figure.querySelector('h3').textContent;
        if (favorites.includes(title)) {
            btn.classList.add('fv');
            btn.textContent = '💜';
        } else {
            btn.classList.remove('fv');
            btn.textContent = '🤍';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('favorite-button')) {
            const btn = event.target;
            const figure = btn.closest('figure');
            const title = figure.querySelector('h3').textContent;
            let favorites = getFavorites();

            if (btn.classList.contains('fv')) {
                btn.classList.remove('fv');
                btn.textContent = '🤍';
                favorites = favorites.filter(favTitle => favTitle !== title);
            } else {
                btn.classList.add('fv');
                btn.textContent = '💜';
                favorites.push(title);
            }
            saveFavorites(favorites);
        }
    });
});