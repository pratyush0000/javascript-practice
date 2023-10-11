//inputbutton
let myLeads = []
const inputButton = document.getElementById("inputButton")
const inputText = document.getElementById("inputText")
let ulEl = document.getElementById("ulEl")

inputButton.addEventListener("click", function(){
    myLeads.push(inputText.value)
    inputText.value=""
    printList()
})

function printList(){
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        listItems += "<li><a href = ''>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems
}

