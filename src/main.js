const divPainting = document.getElementById("pared");
let newDiv= [];

for (let i = 0; i < newInjuries.length; i++) {

    newDiv[i] = document.createElement("DIV");
    newDiv[i].className = "container";

    let yearTemp = `
        <article>
            <p> Año: ${newInjuries[i]['Año']} .</p>
            <p> Botes recreacionales: ${newInjuries[i]['Botes recreacionales']} .</p>
            <p> Ciclistas: ${newInjuries[i]['Ciclistas']} .</p>
            <p> Ocupantes de bus: ${newInjuries[i]['Ocupantes de bus']} .</p>
            <p> Motociclistas: ${newInjuries[i]['Motociclistas']} .</p>
            <p> Peatones: ${newInjuries[i]['Peatones']} .</p>
            <p> Pasajeros de auto: ${newInjuries[i]['Pasajeros de auto']} .</p>
        </article>
    `
    newDiv[i].innerHTML = yearTemp;
    divPainting.appendChild(newDiv[i]);
}