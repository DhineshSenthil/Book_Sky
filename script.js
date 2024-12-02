// selecting popupbox and popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popupbtn")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})


//select cancel button
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

//select container,addbook,booktitle,bookauthor,bookdesc
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdesc=document.getElementById("book-descrption-input")


addbook.addEventListener("click", function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
            <h5>${bookauthor.value}</h5>
                <p>${bookdesc.value}</p>
<button onclick="deletebook(event)">Delete</button>`;  // Use backticks here for template literals
    container.append(div);
});
function deletebook(event){
    event.target.parentElement.remove()

}
