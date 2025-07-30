import { places } from '../data/places.mjs';
const allCardsPlace = document.querySelector('#allCards')

console.log(places)

function displayItems(places) {
    places.forEach(place => {
        const card = document.createElement('div');
        const photo = document.createElement('img');
        const name = document.createElement('h2');
        const address = document.createElement('address');
        const desc = document.createElement('p');

        photo.setAttribute('src', `${place.photo_url}`);
        photo.setAttribute('alt', `${place.name} photo`);
        photo.setAttribute('loading', 'lazy')

        name.innerHTML = `${place.name}`
        address.innerHTML = `${place.address}`
        desc.innerHTML = `${place.description}`

        card.appendChild(photo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(desc);
        allCardsPlace.appendChild(card);
    });
}

displayItems(places);