const navbuttom = document.querySelector("#ham-btn");
const navbar = document.querySelector("#nav-bar");

navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navbar.classList.toggle('show');
})