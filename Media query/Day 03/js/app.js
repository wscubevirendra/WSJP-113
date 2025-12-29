var openMenu = document.querySelector("#openMenu");
var navBar = document.querySelector("header ul");

openMenu.addEventListener(
    "click",
    function () {
        navBar.classList.toggle('open')
    }
)