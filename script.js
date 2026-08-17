function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/perfil-light.png")
    img.setAttribute("alt", "foto etc e tal")
  } else {
    img.setAttribute("src", "./assets/perfil-normal.png")
  }
}
