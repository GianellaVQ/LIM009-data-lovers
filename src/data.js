const newData = (data) => {
  let newInjuries = [];

  for (let i = 0; i < data.length; i++) {
    const newObj = {
      'Año' : parseInt(data[i].Year),
      'Tripulantes' : data[i].Total_Injured_Persons_Recreational_Boating === null ? '--' : data[i].Total_Injured_Persons_Recreational_Boating,
      'Ciclistas' : data[i].Total_Injured_Persons_Pedalcyclists === null ? '--' : data[i].Total_Injured_Persons_Pedalcyclists,
      'Ocupantes de bus' : data[i].Total_Injured_Persons_Bus_Occupants === null ? '--' : data[i].Total_Injured_Persons_Bus_Occupants,
      'Motociclistas' : data[i].Total_Injured_Persons_Motorcyclists === null ? '--' : data[i].Total_Injured_Persons_Motorcyclists,
      'Peatones' : data[i].Total_Injured_Persons_Pedestrians === null ? '--' : data[i].Total_Injured_Persons_Pedestrians,
      'Pasajeros de auto' : data[i].Total_Injured_Persons_Passenger_Car_Occupants === null ? '--' : data[i].Total_Injured_Persons_Passenger_Car_Occupants,  

    };
    newInjuries.push(newObj);
  }
  return newInjuries
};

const filterByYear = (data, year) => {
  let result = [];
  for(let i = 0; i < data.length; i++) {
    if (parseInt(year) === parseInt(data[i]['Año'])){
      result.push(data[i]);
    }
  }
  return result;
}

// const sortYearAsc = (dataByYear) => {
//   const sorted = dataByYear.sort( (a, b) => {
//     if(a['Año'] > b['Año']) {
//       return 1;
//     } else if (a['Año'] < b['Año']){
//       return -1;
//     } else {
//       return 0;
//     }
//   })
  
//   return sorted;
// }

// console.log(sortYearAsc(newData(INJURIES)));

// const sortYearDsc = (dataByYear) => {
//   const inverseSort = dataByYear.sort( (a, b) => {
//     if(a['Año'] < b['Año']) {
//       return 1;
//     } else if (a['Año'] > b['Año']){
//       return -1;
//     } else {
//       return 0;
//     }
//   })
  
//   return inverseSort;
// }

// console.log(sortYearDsc(newData(INJURIES)))

const filterByIndicator = (data, indicator) => {
  //creamos un array que tendrá los valores del indicador seleccionado en todos los años
  let arr = [];
  for(let j = 0; j < data.length; j++){
    // j = 0, "{año: 1960", tripulantes: 63254, ...}
    for(let k = 0; k < Object.keys(data[j]).length; k++){
     // k = 0, 'año'  >>> k = 1, 'tripulates'
      if(indicator === Object.keys(data[j])[k]){
        if(typeof Object.values(data[j])[k] === 'number')
       arr.push(Object.values(data[j])[k])
      }
    }
  }
  return arr
}

const indTotalSum = (arrValues) => {
  let sum = 0;
  for(let i = 0; i < arrValues.length; i++) {
    sum+= parseInt(arrValues[i])
  }
  return sum
}

const indAverage = (totalSumOfInd, arrAddends) => {
  return Math.round(totalSumOfInd/arrAddends.length);

}

const compareYear = (a,b) => {

  if (a['Año'] > b['Año']) {
    return 1;
  } else if (a['Año'] < b['Año']) {
    return -1;
  } else if (a['Año'] === b['Año']){
    return 0;
  }
    
} 

const showAscDesc = (data, select) => {

  if (select === 1) {
    compareYear(data[0], data[1]);
    return data.sort(compareYear);
  } if (select === 2) {
    compareYear(data[0], data[1]);
    return data.sort(compareYear).reverse();
  }

}