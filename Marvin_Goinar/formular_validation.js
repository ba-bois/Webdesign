const regexMap = {
    "vorname": /^([A-Za-z0-9ÄÖÜäöüß]+)$/,
    "nachname": /^([A-Za-z0-9ÄÖÜäöüß]+)$/,
    "email": /^([A-Za-z0-9ÄÖÜäöüß]+@[A-Za-z0-9ÄÖÜäöüß]+\.[A-Za-z0-9ÄÖÜäöüß]+)$/,
    "plz": /^([0-9]{5})$/,
    "strasse": /^([A-Za-z0-9ÄÖÜäöüß]+)$/
}

function handleBlur(id, regex){
    var element = document.getElementById(id);
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

handleBlur("vorname", regexMap.vorname);
handleBlur("nachname", regexMap.nachname);
handleBlur("email", regexMap.email);
handleBlur("plz", regexMap.plz);
handleBlur("strasse", regexMap.strasse);