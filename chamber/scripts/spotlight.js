const url = 'data/members.json';
const cards = document.querySelector('#spotlight');

const displayCompanies = (companies) => {
    companies.forEach(company => {
        if (company.membershipLevel >= 2) {
            let card = document.createElement('section');
            let division = document.createElement('div');
            let name = document.createElement('h2');
            let icon = document.createElement('img');
            let industry = document.createElement('p');
            let phone_number = document.createElement('p');
            let p = document.createElement('p');
            let website = document.createElement('a');

            name.textContent = `${company.name}`;
            industry.innerHTML = `<b>Industry:</b> ${company.industry}`;
            phone_number.innerHTML = `<b>Phone:</b> ${company.phone}`;
            p.innerHTML = `<b>URL:</b> `
            website.textContent = `${company.website}`;

            icon.setAttribute('src', `images/${company.icon}`);
            icon.setAttribute('alt', `icon of ${company.name}`);
            icon.setAttribute('loading', 'lazy');
            icon.setAttribute('width', '80');
            icon.setAttribute('height', '80');

            website.setAttribute('href', company.website);
            website.setAttribute('target', "_blank");

            p.appendChild(website);
            card.appendChild(name);
            card.appendChild(icon);
            division.appendChild(industry);
            division.appendChild(phone_number);
            division.appendChild(p);
            card.appendChild(division);

            cards.appendChild(card);
        }
    });
};

getData();

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data)
};
