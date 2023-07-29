function toggleTheme() {
    let bodyElement = document.querySelector("body")
    let rainHide = document.querySelector(".rain")
    let rainbowShow = document.querySelector("#sunny")
    if (count == 0){
        count = 1;
        audio.play();
    }else{
        count = 0;
        audio.pause();
    }
    bodyElement.classList.toggle("rainToggle")
    rainHide.classList.toggle("hidden")
    rainbowShow.classList.toggle("hidden")
}

switchMode = document.querySelector("button")

switchMode.onclick = toggleTheme;

var audio = document.getElementById("audio");
var playPause = document.getElementById("button");
var count = o;