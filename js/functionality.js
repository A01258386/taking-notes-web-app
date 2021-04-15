
let newnote = document.querySelector("#newnote");
let save = document.querySelector("#save");
let cancel = document.querySelector("#cancel");
let darktheme = document.querySelector("#darktheme");
let area = document.querySelector("#area");
let notesArray=[{title:"note one", body:"this is my first note"},{title:"note two", body:"this is my second note"}];
let itemslist=[];

let mynotes = document.querySelector(".mynotes");

newnote.addEventListener("click", NewNote);
save.addEventListener("click", Save);
cancel.addEventListener("click", Cancel);
darktheme.addEventListener("click", Darktheme);


function NewNote(){

    if (cancel.classList.contains('invisible')){
    cancel.classList.remove('invisible');
    save.classList.remove('invisible');
    area.classList.remove("invisible");
    }

    else{
    area.value = "";
    }
    }
  

function Save(){
  let notebody =area.value
  let notetitle = prompt("The title of the note");

  // let body = document.getElementById("userInput").value;
  // notesArray.push({notetitle:})
  // listitems.push('title')
  let noteobject={title:notetitle, body:notebody}
  notesArray.push(noteobject)

  console.log(notesArray)
  console.log(area.value)
  console.log(notetitle)
  
}


function Cancel(){
    
    cancel.classList.add('invisible');
    save.classList.add('invisible');
    area.classList.add("invisible");
    }


function Darktheme(){
    let element = document.body;
    
    element.classList.toggle("dark-mode");
    mynotes.classList.toggle("sidebardarkmode");
    

    if (darktheme.textContent==="Light Theme") {
        darktheme.textContent="Dark Theme"; 
      } else {
        darktheme.textContent="Light Theme";
      }

};
const list = document.querySelector(".mynotes");
function populatenotelist(arr) {
  // get access to the <ul>
  for (let item of notesArray) {
    console.log(item); //just testing
    let elem = document.createElement("li"); //create a new < li>
    let text = document.createTextNode(item); // create a text node for that <li>
    elem.appendChild(text); //add the text node to <li>
    list.appendChild(elem); // add li to <ul>
  }
}
populatenotelist(arr);

