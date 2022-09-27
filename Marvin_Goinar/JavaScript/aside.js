function changeText(){
    var aside = document.getElementById("aside-element");
    if(window.getComputedStyle(aside).visibility == "hidden"){
        aside.style.visibility = "visible";
    }else{
        aside.style.visibility = "hidden";
    }
}