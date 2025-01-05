const countdownElement = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
};

// Corrected target date: 04/01/2025 at 17:00 (GMT-3)
const targetDate = new Date("2025-01-11T23:00:00-03:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.querySelector(".countdown-container").innerHTML = "<h1>The countdown has ended!</h1>";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.days.textContent = days;
    countdownElement.hours.textContent = hours;
    countdownElement.minutes.textContent = minutes;
    countdownElement.seconds.textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


