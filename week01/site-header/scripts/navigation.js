
const navbuttom = document.querySelector("#ham-btn");
const navbar = document.querySelector("#nav-bar");
const year = document.querySelector("#current-year");
const today = new Date();

const date = document.querySelector("#last-modified")
year.innerHTML = `&copy <span class="highlight">${today.getFullYear()} </span>`

date.innerHTML = `Last Modified: <span id="lastModified">${new Intl.DateTimeFormat("en-US", {
    dateStyle: "short"
}).format(today)} ${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</span>`;

navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navbar.classList.toggle('show');
})