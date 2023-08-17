//document.getElementById("count").innerText=5


let getcount = document.getElementById("count")
// console.log(count)
let jscount = 0
function increment(){
    jscount+=1
    getcount.textContent=jscount
    console.log(jscount)
}

let getentries = document.getElementById("entries")

function save(){
    console.log(jscount)
    getentries.textContent+=jscount + "->"
    jscount=0
    getcount.textContent=0
}



