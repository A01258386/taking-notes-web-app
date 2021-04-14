
let newnote = document.querySelector("#newnote");
let save = document.querySelector("#save");
let cancel = document.querySelector("#cancel");
let darktheme = document.querySelector("#darktheme");
let area = document.querySelector("#area");

let notesArray=[{title:"note one", body:"this is my first note"},];
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
   prompt("The title of the note");
  let input = document.getElementById("userInput").value;
  // alert(input);
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

// if darktheme.textContent==="Dark Theme"{
//     darktheme.textContent="Light Theme";

// }

// function check_web_storage_support() {
//     if(typeof(Storage) !== "undefined") {
//         return(true);
//     }
//     else {
//         alert("Web storage unsupported!");
//         return(false);
//     }
// }
// function display_saved_note() {
//     if(check_web_storage_support() == true) {
//         result = localStorage.getItem('note');
//     }
//     if(result === null) {
//         result = "No note saved";
//     }
//     document.getElementById('area').value = result;
// }
// function save() {
//     if(check_web_storage_support() == true) {
//         let area = document.getElementById("area");
//         if(area.value != '') {
//             localStorage.setItem("note", area.value);
//         }
//         else {
//             alert("Nothing to save");
//         }
//     }
// }

// function cancel() {
//     document.getElementById('area').value = "";
// }

// function newnote(){
//     if newnotebtn.click() ==true:
//         getMatchedCSSRules('')
// }