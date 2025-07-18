const url = 'scripts/members.json';
const cards = document.querySelector('#cards');
const cardsLink = document.querySelector('#show-cards');
const listLink = document.querySelector('#list');
const hide = document.querySelector('.hide');

const displayCompanies = (companies) => {
    companies.forEach(company => {
        let card = document.createElement('section');
        let division = document.createElement('div');
        let name = document.createElement('h2');
        let icon = document.createElement('img');
        let address = document.createElement('p');
        let phone_number = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone_number.textContent = `${company.phone}`;
        website.textContent = `${company.website}`;

        icon.setAttribute('src', `images/${company.icon}`);
        icon.setAttribute('alt', `icon of ${company.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '140');
        icon.setAttribute('height', '140');

        website.setAttribute('href', company.website);
        website.setAttribute('target', "_blank");

        division.appendChild(name);
        division.appendChild(icon);
        card.appendChild(division)
        card.appendChild(address);
        card.appendChild(phone_number);
        card.appendChild(website);

        cards.appendChild(card);
    });
};

getData();

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data)
};

cardsLink.addEventListener('click', () => {
    document.querySelectorAll('section img').forEach(img => {
        img.classList.remove('hide');
    });
    document.querySelectorAll('section').forEach(part => {
        part.classList.remove('list');
    });
    document.querySelectorAll('main div').forEach(part => {
        part.classList.add('cards');
    });
});
listLink.addEventListener('click', () => {
    document.querySelectorAll('section img').forEach(img => {
        img.classList.add('hide');
    });
    document.querySelectorAll('section').forEach(part => {
        part.classList.add('list');
    });
    document.querySelectorAll('main div').forEach(part => {
        part.classList.remove('cards');
    });
});
