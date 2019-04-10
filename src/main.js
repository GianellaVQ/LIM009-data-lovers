const firstviewSection = document.getElementById("first-view");
const injHeader = document.getElementById("injuries-header");
const decisionScreen = document.getElementById("decision-section");
const selectSection = document.getElementById("selects");
      selectSection.className = "select-section";
const sectionPainting = document.getElementById("pared");
const arrowSection = document.getElementById("back-arrow-section");

const goToBifurcation = document.getElementById("start");
const goToYears = document.getElementById("go-to-by-years");
const goToIndicators = document.getElementById("go-to-by-indicators");
const goBack = document.getElementById("back-to-firstview");
const goBackToBifurcation = document.getElementById("back-to-bifurcation");

let aDiv = document.createElement("DIV");

const selectToSort = `
<select id="sort-select">
<option value="ASC">Ascendente</option>
<option value="DSC">Descendente</option>
</select>
`

const firstview = () => {
    injHeader.style.display = "none";
    decisionScreen.style.display = "none";
    firstviewSection.style.display = "flex";
    sectionPainting.style.display = "none";
    arrowSection.style.display = "none";
};

const bifurcation = () => {
    document.getElementById("first-view").style.display = "none";
    injHeader.style.display = "flex";
    decisionScreen.style.display = "flex";
    sectionPainting.innerHTML = "";
    sectionPainting.style.display = "none";
    arrowSection.style.display = "none";
    selectSection.style.display = "none";

    goBack.addEventListener("click", () => {
        firstview()
    });
}

firstview();

goToBifurcation.addEventListener("click", bifurcation);

goToYears.addEventListener("click", () => {
    decisionScreen.style.display = "none";
    sectionPainting.style.display = "flex";
    arrowSection.style.display = "flex";
    selectSection.style.display = "flex";

    const showByYear = (data, sectionPainted) => {
        const newDiv= document.createElement("DIV");
              newDiv.className = "containerA";
        for (let i = 0; i < data.length; i++) {        
            let yearTemp = `
                <article>
                    <p> Año: ${data[i]['Año']} .</p>
                    <p> Tripulantes: ${data[i]['Tripulantes']} .</p>
                    <p> Ciclistas: ${data[i]['Ciclistas']} .</p>
                    <p> Ocupantes de bus: ${data[i]['Ocupantes de bus']} .</p>
                    <p> Motociclistas: ${data[i]['Motociclistas']} .</p>
                    <p> Peatones: ${data[i]['Peatones']} .</p>
                    <p> Pasajeros de auto: ${data[i]['Pasajeros de auto']} .</p>
                </article>
            `
            newDiv.innerHTML += yearTemp;
        }
        return sectionPainted.appendChild(newDiv);
      }

    const selectTemplate = `
      <select id="year-select">
        <option value="0">Año</option>
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

      ${selectToSort}
    `
    aDiv.innerHTML = selectTemplate;
    selectSection.appendChild(aDiv);

    const yearSelector = document.getElementById("year-select");
    const yearSorter = document.getElementById("sort-select");

    showByYear(newData(INJURIES), sectionPainting);

    yearSelector.addEventListener("change", () => {
        let yearSelected = parseInt(yearSelector.value);
        sectionPainting.innerHTML = "";
        if(yearSelected === 0){
            showByYear(newData(INJURIES), sectionPainting);            
        } else {
        showByYear(filterByYear(newData(INJURIES), yearSelected), sectionPainting);
        }
    })

    yearSorter.addEventListener("change", () => {
        const typeOfSort = yearSorter.value;
        sectionPainting.innerHTML = "";
        if (typeOfSort === "DSC"){
            showByYear(sortYear(newData(INJURIES),typeOfSort), sectionPainting);
        } else {
            showByYear(sortYear(newData(INJURIES),typeOfSort), sectionPainting);
        } 
    })
    goBackToBifurcation.addEventListener("click", bifurcation);
});

goToIndicators.addEventListener("click", () => {
    decisionScreen.style.display = "none";
    sectionPainting.style.display = "flex";
    arrowSection.style.display = "flex";
    selectSection.style.display = "flex";

    const showByIndicator = (data, sectionPainted) => {
        const newDiv = document.createElement("DIV");
              newDiv.className = "containerA";

        for (let i = 0; i < data.length; i++) {
            let indTemp = `
                <h2>${Object.keys(data[i])}</h2> 
                <p>${Object.values(data[i])}</p>
                `    
            newDiv.innerHTML += indTemp;            
        }
        return sectionPainted.appendChild(newDiv);
    };

    aDiv.innerHTML = selectToSort;
    selectSection.appendChild(aDiv);

    const indSorter = document.getElementById("sort-select");

    showByIndicator(sumOfValuesByInd(newData(INJURIES)), sectionPainting);

    indSorter.addEventListener("change", () => {
        const typeOfSort = indSorter.value;
        sectionPainting.innerHTML = "";
        if (typeOfSort === "DSC"){
            showByIndicator(sortByIndValues(sumOfValuesByInd(newData(INJURIES)),typeOfSort), sectionPainting);
        } else {
            showByIndicator(sortByIndValues(sumOfValuesByInd(newData(INJURIES)),typeOfSort), sectionPainting);        
        }
    })
    goBackToBifurcation.addEventListener("click", bifurcation);
});