console.log("This is Notes Taking app");


//Add events when addanote button clicked//
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";//to remove typed value after adding note//
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {

        html += `
        <div class="card my-3 mx-3 notecard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `
    });

    let notesElm = document.getElementById("notes");

    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show!Add notes by clicking on "Add a note" button .`;
    }
}

//Function to delete node//
function deleteNote(index) {
    console.log("I am deleting", index);

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


//To search text in notes//

let search=document.getElementById("searchTxt");
search.addEventListener("input",function(element){
    let inputVal= search.value;
    console.log("Input event fired!",inputVal);

    let noteCards=document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){

        let cardText=element.getElementsByTagName('p')[0].innerText;
       // console.log(cardText);
        
        if(cardText.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})