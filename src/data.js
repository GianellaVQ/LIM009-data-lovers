const newInjuries = [];
const indexInjuries = [
  {name: 'Ocupantes de Bus', index: 2, 
  imageI: 1},
  {name : 'Motociclistas', index : 13, 
  imageI: 2}, 
  {name: 'Pasajeros de auto', index: 20, 
  imageI: 3},
  {name: 'Ciclistas', index: 23, 
  imageI: 4}, 
  {name: 'Peatones', index: 24, 
  imageI: 5}, 
  {name: 'Botes recreacionales', index: 36, 
  imageI: 6}, 
  {name: 'Año', index: 48, 
  imageI: 7}
];

for(let i = 0; i < INJURIES.length; i++) {
    const obj = {}
    for(let j = 0; j < indexInjuries.length; j++)  {
        obj[indexInjuries[j].name] = Object.values(INJURIES[i])[indexInjuries[j].index];
    // objeto[ P R O P I E D A D ] =  V A L O R  //
    }
    newInjuries.push(obj)
}
console.log(newInjuries)
newInjuries


const mostrar = (data, divPainted) => {
  let newDiv= [];
  for (let i = 0; i < data.length; i++) {

      newDiv[i] = document.createElement("DIV");
      newDiv[i].className = "containerA";
  
      let yearTemp = `
          <article>
              <p> Año: ${data[i]['Año']} .</p>
              <p> Botes recreacionales: ${data[i]['Botes recreacionales']} .</p>
              <p> Ciclistas: ${data[i]['Ciclistas']} .</p>
              <p> Ocupantes de bus: ${data[i]['Ocupantes de bus']} .</p>
              <p> Motociclistas: ${data[i]['Motociclistas']} .</p>
              <p> Peatones: ${data[i]['Peatones']} .</p>
              <p> Pasajeros de auto: ${data[i]['Pasajeros de auto']} .</p>
          </article>
      `
      newDiv[i].innerHTML = yearTemp;
      divPainted.appendChild(newDiv[i]);
  }
}





























// window.data = {
//   filterByYear: (data, year) => {
//     return data.filter((obj) => parseInt(obj.Year) === year);
//   }

//   }


  //console.log(data.filterByYear(INJURIES,2015))

