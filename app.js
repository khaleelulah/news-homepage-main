var menuIcon = document.getElementById("menu-icon");
var menuLi = document.getElementById("menu-list");
var menuclose = [
    "./assets/images/icon-menu-close.svg",
    "icon-menu.svg"
]


menuIcon.addEventListener("click", () => {
    menuLi.classList.toggle("menuvisible")
    menuIcon.src = menuclose[0]
})