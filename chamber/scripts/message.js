const miliseconds = Date.now();
const sidebarMessage = document.getElementById('message');

function showVisitMessage() {
    const now = Number(localStorage.getItem('time'));
    const daysDiff = ((miliseconds - now) / 86400000).toFixed(0);
    let message = '';
    if (now) {
        if (daysDiff > 1) {
            message = `You last visited ${daysDiff} days ago.`;
        }
        else if (daysDiff == 1) {
            message = `You last visited ${daysDiff} day ago.`;
        }
        else {
            message = 'Back so soon! Awesome!';
        }
    } else {
        message = 'Welcome! Let us know if you have any questions.';
    }
    sidebarMessage.textContent = message;
    localStorage.setItem('time', miliseconds);
}

showVisitMessage();