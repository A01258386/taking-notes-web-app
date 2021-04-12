
let newnote = document.querySelector("#newnote");
let save = document.querySelector("#save");
let cancel = document.querySelector("#newnote");
let darktheme = document.querySelector("#newnote");

newnote.addEventListener("click", pink);
save.addEventListener("click", blue);

function pink(e){
    document.body.style.backgroundColor = "pink";
  console.log(e); // pink
};

function blue(e){
    document.body.style.backgroundColor = "blue";
  console.log(e); // blue
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

// function darktheme(){
//     if darkthemeButton.click() ==true:
//         getMatchedCSSRules('darktheme.css')
// }
// function newnote(){
//     if newnotebtn.click() ==true:
//         getMatchedCSSRules('')
// }