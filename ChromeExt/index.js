//inputbutton
const inputButton = document.getElementById("inputButton")
let bookmarkStore = []
const inputText = document.getElementById("inputText")
let bookmarkList = document.getElementById("bookmarkList")

inputButton.addEventListener("click", function(){
    bookmarkStore.push(inputText.value)
    bookmarkList.textContent = (bookmarkStore)
    console.log(bookmarkStore)
})

