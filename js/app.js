var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
"use strict";
mainListDiv.classList.toggle("show_list");
mediaButton.classList.toggle("active");
};

const btnView = document.querySelector(".view-project");
btnView.addEventListener("click", () => {
    window.open("https://dekadii01.github.io/laba.github.io/");
})

const btnSecond = document.querySelector(".btn-secondary");
btnSecond.addEventListener("click", () => {
    window.open("https://github.com/dekadii01");
})