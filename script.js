var iconaMenu = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".sidebar");

iconaMenu.onclick = function() {
    sidebar.classList.toggle("sidebar-nascosta");
}

var iconaTendinaDescrizione = document.querySelector(".fa-chevron-down");
var descrizione = document.querySelector(".play-descrizione");

iconaTendinaDescrizione.onclick = function() {
    descrizione.classList.toggle("play-descrizione-nascosta");
}

var iconaTendinaCommento = document.querySelector(".fa-angle-double-down");
var commento = document.querySelector(".play-commento-container");

iconaTendinaCommento.onclick = function() {
    commento.classList.toggle("play-commento-nascosto");
}
