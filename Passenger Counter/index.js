//document.getElementById("count").innerText=5


let getcount = document.getElementById("count")
let jscount = 0

function increment(){
    jscount+=1
    getcount.textContent=jscount
    console.log(jscount)
}



let getentries = document.getElementById("savecount")
let getrealnoofsaves = document.getElementById("noofsaves")
let realnoofsaves=0
let totalsaves = 0

function save(){
    console.log(jscount)
    totalsaves+=jscount
    getentries.textContent="Saved Count: " + totalsaves
    realnoofsaves+=1
    getrealnoofsaves.textContent="No. of saves: " + realnoofsaves
    jscount=0
    getcount.textContent=0
}

// //document.getElementById("count").innerText=5


// let getcount = document.getElementById("count")
// // console.log(count)
// let jscount = 0
// function increment(){
//     jscount+=1
//     getcount.textContent=jscount
//     console.log(jscount)
// }

// let getentries = document.getElementById("entries")
// let getrealnoofsaves = document.getElementById("noofsaves")
// let realnoofsaves=0

// function save(){
//     console.log(jscount)
//     getentries.textContent+=jscount + "->"
//     realnoofsaves+=1
//     getrealnoofsaves.textContent="No. of saves: " + realnoofsaves
//     jscount=0
//     getcount.textContent=0
// }




