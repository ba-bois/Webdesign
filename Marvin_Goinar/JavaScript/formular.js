const regexMap = {
    "vorname": /^([A-Za-zÄÖÜäöüß]+)$/,
    "nachname": /^([A-Za-zÄÖÜäöüß]+)$/,
    "email": /^([A-Za-z0-9ÄÖÜäöüß]+@[A-Za-z0-9ÄÖÜäöüß]+\.[A-Za-z0-9ÄÖÜäöüß]+)$/,
    "plz": /^([0-9]{5})$/,
    "strasse": /^([A-Za-zÄÖÜäöüß]+\s[0-9]+[A-Za-z]*)$/
}

function handleBlur(id, regex){
    var element = document.getElementById(id);
    var submit = document.getElementById("submit-button");
    element.onblur = function(){
        if(element.value.match(regex)){
            element.classList.remove("input-invalid");
            element.classList.add("input-valid");
        }else{
            element.classList.remove("input-valid");
            element.classList.add("input-invalid");
        }
        if(checkFormular()){
            submit.disabled= false;
        }else{
            submit.disabled= true;
        }
    }
}

function checkFormular(){
    if(!(document.getElementById("vorname").classList.contains("input-valid"))){
        console.log("Etwas ist falsch");
        return false;
    }
    if(!(document.getElementById("nachname").classList.contains("input-valid"))){
        console.log("Etwas ist falsch");
        return false;
    }
    if(!(document.getElementById("email").classList.contains("input-valid"))){
        console.log("Etwas ist falsch");
        return false;
    }
    if(!(document.getElementById("plz").classList.contains("input-valid"))){
        console.log("Etwas ist falsch");
        return false;
    }
    if(!(document.getElementById("strasse").classList.contains("input-valid"))){
        console.log("Etwas ist falsch");
        return false;
    }
    console.log("alles korrekt");
    return true;
}

handleBlur("vorname", regexMap.vorname);
handleBlur("nachname", regexMap.nachname);
handleBlur("email", regexMap.email);
handleBlur("plz", regexMap.plz);
handleBlur("strasse", regexMap.strasse);