const newYear = "1 Jan 2025";

let countdown = () =>{
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const secLeftTotal = (newYearDate-currentDate)/1000
    const daysLeft = Math.floor(secLeftTotal/3600/24);
    const hoursLeft = Math.floor(secLeftTotal/3600)%24;
    const minsLeft = Math.floor(secLeftTotal/60)%60;
    const secLeft = Math.floor(secLeftTotal)%60;

    console.log(daysLeft,hoursLeft,minsLeft,secLeft)
}

countdown()

setInterval(countdown,1000)