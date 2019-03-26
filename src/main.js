const divPainting = document.getElementById("pared"),
    yearSelector = document.getElementById('year-select');


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

yearSelector.addEventListener("change", (e) => {
    const yearSelected = parseInt(yearSelector.value);

    for(let i = 0; i < newInjuries.length; i++){
        if(parseInt(yearSelected) === parseInt(newInjuries[i]['Año'])){
            let yearTemp = `
                <article>
                    <p> Año : ${newInjuries[i]['Año']}</p>
                    <p> Botes recreacionales : ${newInjuries[i]['Botes recreacionales']}</p>
                    <p> Ciclistas: ${newInjuries[i]['Ciclistas']}</p>
                    <p> Ocupantes de Bus : ${newInjuries[i]['Ocupantes de Bus']}</p>
                    <p> Motociclistas : ${newInjuries[i]['Motociclistas']}</p>
                    <p> Peatones : ${newInjuries[i]['Peatones']}</p>
                    <p> Pasajeros de auto : ${newInjuries[i]['Pasajeros de auto']}</p>
                </article>
            `
        divPainting.innerHTML = yearTemp;
        }
    }
});

// for (let i = 0; i < newInjuries.length; i++) {
//     let element = newInjuries[i]['Botes recreacionales'] == null ? 0 : newInjuries[i]['Botes recreacionales'];
//     element = newInjuries[i]['Ciclistas'] == null ? 0 : newInjuries[i]['Ciclistas'];
//     element = newInjuries[i]['Ocupantes de Bus'] == null ? 0 : newInjuries[i]['Ocupantes de Bus'];
//     element = newInjuries[i]['Motociclistas'] == null ? 0 : newInjuries[i]['Motociclistas'];
//     element = newInjuries[i]['Peatones'] == null ? 0 : newInjuries[i]['Peatones'];
//     element = newInjuries[i]['Pasajeros de auto'] == null ? 0 : newInjuries[i]['Pasajeros de auto'];
//     console.log(element)
// }
// }

// for (let i = 0; i < newInjuries.length; i++) {
//     if (newInjuries[i]['Botes recreacionales'] === null) {
//         ;
//     } else {
//         return newInjuries[i]['Botes recreacionales'];
//     }
//     // const element = array[i];
//     }    
//     console.log(newInjuries);

