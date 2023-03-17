//document.getElementById("count").innerText=5


let getcount = document.getElementById("count")
// console.log(count)
let jscount = 0
function increment(){
    jscount+=1
    getcount.innerText=jscount
}

let getentries = document.getElementById("entries")

function save(){
    getentries.innerText+=jscount + "->"
}



