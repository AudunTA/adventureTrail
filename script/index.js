const menuIcon = document.querySelector(".fa-bars");
const closeIcon =document.querySelector(".close-icon");
const menu = document.querySelector(".hamburger-menu");
console.log("inne");
//hamburger menu, eventlistener for clicking the icon
menuIcon.addEventListener("click", handleMenu);

function handleMenu() {
    //gives the menu a class if clicked
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menu.style.display="block";
}   
closeIcon.addEventListener("click", handleClose);

function handleClose() {
  menu.style.display="none";
  menu.classList.remove("showMenu");
  menuIcon.style.display = "block";

}

