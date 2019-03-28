// const newInjuries = [];
// const indexInjuries = [
//   {name: 'Ocupantes de Bus', index: 2, 
//   imageI: 1},
//   {name : 'Motociclistas', index : 13, 
//   imageI: 2}, 
//   {name: 'Pasajeros de auto', index: 20, 
//   imageI: 3},
//   {name: 'Ciclistas', index: 23, 
//   imageI: 4}, 
//   {name: 'Peatones', index: 24, 
//   imageI: 5}, 
//   {name: 'Botes recreacionales', index: 36, 
//   imageI: 6}, 
//   {name: 'Año', index: 48, 
//   imageI: 7}
// ];

// for(let i = 0; i < INJURIES.length; i++) {
//     const obj = {}
//     for(let j = 0; j < indexInjuries.length; j++)  {
//         obj[indexInjuries[j].name] = Object.values(INJURIES[i])[indexInjuries[j].index];
//     // objeto[ P R O P I E D A D ] =  V A L O R  //
//     }
//     newInjuries.push(obj)
// }
// console.log(newInjuries)
// newInjuries

const newData = (data) => {
  const newInjuries = []
  for (let i = 0; i < data.length; i++) {
    const newobjeto = {
      'Anio' : data[i].Year,
      'Botes recreacionales' : data[i].Total_Injured_Persons_Recreational_Boating === null ? '--' : data[i].Total_Injured_Persons_Recreational_Boating,
      'Ciclistas' : data[i].Total_Injured_Persons_Pedalcyclists === null ? '--' : data[i].Total_Injured_Persons_Pedalcyclists,
      'Ocupantes de bus' : data[i].Total_Injured_Persons_Bus_Occupants === null ? '--' : data[i].Total_Injured_Persons_Bus_Occupants,
      'Motociclistas' : data[i].Total_Injured_Persons_Motorcyclists === null ? '--' : data[i].Total_Injured_Persons_Motorcyclists,
      'Peatones' : data[i].Total_Injured_Persons_Pedestrians === null ? '--' : data[i].Total_Injured_Persons_Pedestrians,
      'Pasajeros de auto' : data[i].Total_Injured_Persons_Passenger_Car_Occupants === null ? '--' : data[i].Total_Injured_Persons_Passenger_Car_Occupants,  
    }
    newInjuries.push(newobjeto);
  }
  return newInjuries
}

const filterData = (newData, yearSelected) => {
  let result = [];
  // retornar el array de elementos on el filtro indicado
  for(let i = 0; i < newData.length; i++){
    if(yearSelected === parseInt(newData[i]['Anio'])){
      result.push(newData[i]);
      // console.log(result);
    }  
  }
return result;
}





