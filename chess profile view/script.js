const button = document.getElementById('btn');
const card = document.getElementById('card');

button.addEventListener('click',() =>{
    const username = document.getElementById('username').value;
    card.style.display = 'block';
    const url = `https://api.chess.com/pub/player/`
    const finalurl = url + `${username}`

    fetch(finalurl)
    .then((response) =>{
        if(!response.ok)
        {
            throw new Error("no valid user name")
        }
        return response.json()
    } )
    .then((data) => {
       
        const card = document.getElementById('card');
        card.innerHTML = `<img src = "${data.avatar}">
        <br>
        <h1>${data.username}</h1> <br>
        <br>
        <h5>Player ID: ${data.player_id}</h5> <br>
        <h5>Current League: ${data.league}</h5> <br>
        <h5>Followers: ${data.followers}</h5> <br>
        <h5>Profile Link: <a href = '${data.url}'>${data.username}</a></h5> <br>
        <br>
        `
        console.log(data.followers)
    })
    .catch((err) => {
        console.log("there was an error",err);
        // You may want to display an error message in the card in case of an error
        card.innerHTML = `<p>Error fetching data. Please try again.</p>`;
    });

})