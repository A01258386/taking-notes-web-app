
function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}
function display_saved_note() {
    if(check_web_storage_support() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "No note saved";
    }
    document.getElementById('area').value = result;
}
function save() {
    if(check_web_storage_support() == true) {
        var area = document.getElementById("area");
        if(area.value != '') {
            localStorage.setItem("note", area.value);
        }
        else {
            alert("Nothing to save");
        }
    }
}

function cancel() {
    document.getElementById('area').value = "";
}

// function darktheme(){
//     if darkthemeButton.click() ==true:
//         getMatchedCSSRules('darktheme.css')
// }
// function newnote(){
//     if newnotebtn.click() ==true:
//         getMatchedCSSRules('')
// }