const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified")
const today = new Date();

year.innerHTML = `&copy <span class="highlight">${today.getFullYear()} </span>`

date.innerHTML = `Last Modification: <span id="lastModified">${new Intl.DateTimeFormat("en-US", {
    dateStyle: "short"
}).format(today)} ${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</span>`;
