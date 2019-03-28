const divPainting = document.getElementById("data"),
    yearSelector = document.getElementById('year-select');

const printData = (arrNewData, elementoNodoHTML) => {
    let string= '';
    for (let i = 0; i < arrNewData.length; i++) {
         string += `
            <article class="container">
                <p> Año: ${arrNewData[i]['Anio']} .</p>
                <p> Botes recreacionales: ${arrNewData[i]['Botes recreacionales']} .</p>
                <p> Ciclistas: ${arrNewData[i]['Ciclistas']} .</p>
                <p> Ocupantes de bus: ${arrNewData[i]['Ocupantes de bus']} .</p>
                <p> Motociclistas: ${arrNewData[i]['Motociclistas']} .</p>
                <p> Peatones: ${arrNewData[i]['Peatones']} .</p>
                <p> Pasajeros de auto: ${arrNewData[i]['Pasajeros de auto']} .</p>
            </article>
        `
    }
    // console.log(string);
    elementoNodoHTML.innerHTML = string;
}
printData(newData(INJURIES),divPainting);


yearSelector.addEventListener("change", (e) => {
    const yearSelected = parseInt(yearSelector.value);
    printData(filterData(newData(INJURIES), yearSelected), divPainting);
});

const arrTypeCausantes = ['Botes recreacionales','Ciclistas','Ocupantes de bus','Motociclistas','Peatones','Pasajeros de auto'];

const categories = (newData) => {
    let arraySuma = [];
    for (let i = 0; i < arrTypeCausantes.length; i++) {
        let suma = 0;
        for (let a = 0; a < newData.length; a++) {
            if (typeof newData[a][arrTypeCausantes[i]] === 'number') {
                suma += newData[a][arrTypeCausantes[i]];
            }
        }
        arraySuma.push(`${arrTypeCausantes[i]} : ${suma}`)
    }
    console.log(arraySuma);
}
categories(newData(INJURIES));

// const order = (arrTypeCausantes) => {
//     arrTypeCausantes.sort();
//     // console.log(arrTypeCausantes);
    
// }
// order(arrTypeCausantes);

// const orderReverse = (arrTypeCausantes) => {
//     arrTypeCausantes.reverse();
//     console.log(arrTypeCausantes);
    
// }
// orderReverse(arrTypeCausantes);





