function toggleTheme() {
    let bodyElement = document.querySelector("body")
    return bodyElement.classList.toggle("dark-mode")
}

buttonVariable = document.querySelector("button")

buttonVariable.onclick = toggleTheme;