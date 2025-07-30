const year = document.querySelector("#currentyear");
const nowTime = document.querySelector("#lastModified");
const timestamp = document.querySelector('#timestamp');
const today = new Date();

year.innerHTML = `&copy<span class="highlight">${today.getFullYear()}</span>`

document.addEventListener('DOMContentLoaded', () => {
    if (timestamp) {
        
        const nowISO = new Date().toISOString();
        const data = new Date(nowISO);
        const userFriendly = data.toLocaleString('en-US', {
            dateStyle: 'long',
            timeStyle: 'short'
        })
        timestamp.value = userFriendly;
    }
});

nowTime.innerHTML = `Last Modification: ${new Intl.DateTimeFormat("en-US", {
    dateStyle: "short"
}).format(today)} ${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</span>`;
