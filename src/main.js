const injHeader = document.getElementById("injuries-header");
injHeader.style.display = "none";
const decisionScreen = document.getElementById("decision-section");
decisionScreen.style.display = "none";
const selectSection = document.getElementById("filter-select");
      selectSection.className = "select-section"
let aDiv = document.createElement("DIV");
const sectionPainting = document.getElementById("pared");

document.getElementById("go-to-folios").addEventListener("click", () => {
    document.getElementById("first-view").style.display = "none";
    injHeader.style.display = "flex";
    decisionScreen.style.display = "flex";
});

document.getElementById("go-to-by-years").addEventListener("click", () => {
    decisionScreen.style.display = "none";

    const selectTemplate = `
      <select id="year-select">
        <option value="">Año</option>
        <option value="1960">1960</option>
        <option value="1965">1965</option>
        <option value="1970">1970</option>
        <option value="1975">1975</option>
        <option value="1980">1980</option>
        <option value="1985">1985</option>
        <option value="1990">1990</option>
        <option value="1995">1995</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
      </select>
    `
    aDiv.innerHTML = selectTemplate;
    selectSection.appendChild(aDiv);
    const yearSelector = document.getElementById("year-select");
    showByYear(newData(INJURIES), sectionPainting);

    yearSelector.addEventListener("change", () => {
        let yearSelected = parseInt(yearSelector.value);
        sectionPainting.innerHTML = "";
        showByYear(filterByYear(newData(INJURIES), yearSelected), sectionPainting);
    })
});


document.getElementById("go-to-by-indicators").addEventListener("click", () => {
    decisionScreen.style.display = "none";

    const selectTemplate = `
      <select id="indicator-select">
        <option value="">Indicador</option>
        <option value="Tripulantes">Tripulantes</option>
        <option value="Ciclistas">Ciclistas</option>
        <option value="Ocupantes de bus">Ocupantes de bus</option>
        <option value="Motociclistas">Motociclistas</option>
        <option value="Peatones">Peatones</option>
        <option value="Pasajeros de auto">Pasajeros de auto</option>
      </select>
    `
    aDiv.innerHTML = selectTemplate;
    selectSection.appendChild(aDiv);
    const indicatorSelector = document.getElementById("indicator-select");


    indicatorSelector.addEventListener("change", () => {
    let indicatorSelected = indicatorSelector.value;
        sectionPainting.innerHTML = "";

        showAverageByIndicator(indicatorSelected, indAverage(indTotalSum(filterByIndicator(newData(INJURIES), indicatorSelected)), filterByIndicator(newData(INJURIES), indicatorSelected)), sectionPainting)
    })

})
