var regexName = /^([a-zA-Z]+)$/;

var vorname = document.getElementById("vorname");
var nachname = document.getElementById("nachname");
var email = document.getElementById("email");
var plz = document.getElementById("plz");
var strasse = document.getElementById("strasse");

const regexMap = {
    "vorname": /^([a-zA-Z]+)$/,
    "nachname": /^([a-zA-Z]+)$/,
    "email": /^([a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+)$/,
    "plz": /^([0-9]+)$/,
    "strasse": /^([a-zA-Z]+)$/
}

function handleBlur(element, regex){
    element.onblur = function(){
        if(element.value.match(regex)){
            element.classList.remove("input-invalid");
            element.classList.add("input-valid");
        }else{
            element.classList.remove("input-valid");
            element.classList.add("input-invalid");
        }
    }
}

handleBlur(vorname, regexMap.vorname);
handleBlur(nachname, regexMap.nachname);
handleBlur(email, regexMap.email);
handleBlur(plz, regexMap.plz);
handleBlur(strasse, regexMap.strasse);