//inputbutton
let myLeads = []
const inputButton = document.getElementById("inputButton")
const inputText = document.getElementById("inputText")
let ulEl = document.getElementById("ulEl")



localStorage.clear()
let ls = JSON.parse(localStorage.getItem("myLeads"))

console.log(ls)


inputButton.addEventListener("click", function(){
    myLeads.push(inputText.value)

    inputText.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    
    printList()


    console.log(localStorage.getItem("myLeads"))
})

function printList(){
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        listItems += `
            <li>
                <a href = '${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

