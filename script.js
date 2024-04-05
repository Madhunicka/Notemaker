var popupbox = document.querySelector(".popup-box")
var popupoverlay = document.querySelector(".popup-overlay")
var btn = document.getElementById("add-popup-button")


btn.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

//select cancel button where 
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"

})

//select book container, addbook, booktitle, bookdescription, bookauthor

var notecontainer = document.querySelector(".container")
var add = document.getElementById("add-note")
var notetitle = document.getElementById("note-title-input")
var notedescription = document.getElementById("note-description-input")
var notesub = document.getElementById("note-sub-title-input")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class", "note-container")
    div.innerHTML= `<h2>${notetitle.value}</h2>
    <h5>${notesub.value}</h5>
    <p>${notedescription.value}</p>
    <button onclick="deleteNote(event)">Delete</button>`
    notecontainer.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"

})

function deleteNote(event){
    event.target.parentNode.remove()
}



