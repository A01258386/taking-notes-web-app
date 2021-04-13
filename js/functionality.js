
let newnote = document.querySelector("#newnote");
let save = document.querySelector("#save");
let cancel = document.querySelector("#cancel");
let darktheme = document.querySelector("#darktheme");

let mynotes = document.querySelector(".mynotes");
// let darktheme = document.querySelector("#darktheme");

newnote.addEventListener("click", NewNote);
save.addEventListener("click", Save);
cancel.addEventListener("click", Cancel);
darktheme.addEventListener("click", Darktheme);

function NewNote(){
    document.body.style.backgroundColor = "pink";
  console.log(); // pink
};

function Save(){
    document.body.style.backgroundColor = "blue";
  console.log(); // blue
};

function Cancel(){
    document.body.style.backgroundColor ="red";
    console.log();//red
};

function Darktheme(){
    let element = document.body;
    
    element.classList.toggle("dark-mode");
    mynotes.classList.toggle("sidebardarkmode");
    darktheme.textContent="Light Theme";
};





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
//         var area = document.getElementById("area");
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

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
// function newnote(){
//     if newnotebtn.click() ==true:
//         getMatchedCSSRules('')
// }