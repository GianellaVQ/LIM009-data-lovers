const injHeader = document.getElementById("injuries-header");
injHeader.style.display = "none";
const decisionScreen = document.getElementById("decision-section");
decisionScreen.style.display = "none";

document.getElementById("go-to-folios").addEventListener("click", () => {
document.getElementById("first-view").style.display = "none";
injHeader.style.display = "flex";
decisionScreen.style.display = "flex";
});

document.getElementById("go-to-by-years").addEventListener("click", () => {
decisionScreen.style.display = "none";

const divPainting = document.getElementById("pared");
mostrar(newInjuries, divPainting)
});