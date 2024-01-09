document.addEventListener('DOMContentLoaded', function () {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const mins = document.getElementById('mins');
    const secs = document.getElementById('secs');

    const newYear = "1 Jan 2025";

    let countdown = () => {
        const newYearDate = new Date(newYear);
        const currentDate = new Date();

        const secLeftTotal = (newYearDate - currentDate) / 1000;
        const daysLeft = Math.floor(secLeftTotal / 3600 / 24);
        const hoursLeft = Math.floor(secLeftTotal / 3600) % 24;
        const minsLeft = Math.floor(secLeftTotal / 60) % 60;
        const secLeft = Math.floor(secLeftTotal) % 60;

        days.innerHTML = daysLeft;
        hours.innerHTML = formatTime(hoursLeft);
        mins.innerHTML = formatTime(minsLeft);
        secs.innerHTML = formatTime(secLeft);

        console.log(daysLeft, hoursLeft, minsLeft, secLeft);
    }

    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }

    countdown();

    setInterval(countdown, 1000);
});
