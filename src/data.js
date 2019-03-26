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































// window.data = {
//   filterByYear: (data, year) => {
//     return data.filter((obj) => parseInt(obj.Year) === year);
//   }

//   }


  //console.log(data.filterByYear(INJURIES,2015))

