function showVideo(id){
    var element = document.getElementById(id);
    element.classList.remove("produkt-video");
    element.play();
}

function hideVideo(id){
    var element = document.getElementById(id);
    element.classList.add("produkt-video");
    element.pause();
}