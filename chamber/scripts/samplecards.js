const url = 'scripts/members.json';
const cards = document.querySelector('#sample-cards');

const displayCompanies = (companies, amount) => {
    for (i = 0; i < amount; i++) {
        let card = document.createElement('section');
        let division = document.createElement('div');
        let name = document.createElement('h2');
        let icon = document.createElement('img');
        let industry = document.createElement('p');
        let phone_number = document.createElement('p');
        let p = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = `${companies[i].name}`;
        industry.innerHTML = `<b>Industry:</b> ${companies[i].industry}`;
        phone_number.innerHTML = `<b>Phone:</b> ${companies[i].phone}`;
        p.innerHTML = `<b>URL:</b> `
        website.textContent = `${companies[i].website}`;

        icon.setAttribute('src', `images/${companies[i].icon}`);
        icon.setAttribute('alt', `icon of ${companies[i].name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '80');
        icon.setAttribute('height', '80');

        website.setAttribute('href', companies[i].website);
        website.setAttribute('target', "_blank");

        p.appendChild(website);
        card.appendChild(name);
        card.appendChild(icon);
        division.appendChild(industry);
        division.appendChild(phone_number);
        division.appendChild(p);
        card.appendChild(division);

        cards.appendChild(card);
    };
};

getData();

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data, 3)
};
