// JavaScript Document
console.log("hi");

// const d = new Date();
// document.getElementById("demo").innerHTML = d;



var menuButton = document.querySelector("header>button:nth-of-type(1)");
var deNav = document.querySelector("header>nav");

menuButton.onclick = openMenu;

function openMenu(){
    
    deNav.classList.toggle("toonMenu");
}

// JavaScript for Play/Pause Button
const video = document.querySelector("#backgroundVideo");
const playPauseButton = document.querySelector("#playPauseButton");

playPauseButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = "Pause";
    } else {
        video.pause();
        playPauseButton.textContent = "Play";
    }
});