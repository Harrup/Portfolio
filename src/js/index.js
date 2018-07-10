import '../scss/main.scss'

var menu = document.querySelector(".slider-parent");
//var cross = document.querySelector("#cross");
var bars = document.querySelector(".fa-bars");

//cross.addEventListener("click", removeMenu);
bars.addEventListener("click", toggleMenu )

function toggleMenu(){
  menu.classList.toggle("active");
  //bars.style.opacity="0";
}

function removeMenu(){
  menu.classList.remove("active");
  //bars.style.opacity="1";
}
