const newData = (data) => {
  const newInjuries = [];
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
  return newInjuries;
};

const filterByYear = (data, year) => {
  const result = [];
  for(let i = 0; i < data.length; i++) {
    if (parseInt(year) === parseInt(data[i]['Año'])) {
      result.push(data[i]);
    }
  }
  return result;
}


const sortYearAsc = (dataByYear) => {
  const sorted = dataByYear.sort( (a, b) => {
    if(a['Año'] > b['Año']) {
      return 1;
    } else if (a['Año'] < b['Año']){
      return -1;
    } else {
      return 0;
    }
  })
  return sorted;
}

const sortYearDsc = (dataByYear) => {
  const inverseSorted = dataByYear.sort( (a, b) => {
    if(a['Año'] < b['Año']) {
      return 1;
    } else if (a['Año'] > b['Año']){
      return -1;
    } else {
      return 0;
    }
  })
  return inverseSorted;
}

const sumOfValuesByInd = (data) => {
  const arrTypeCausantes = ['Tripulantes','Ciclistas','Ocupantes de bus','Motociclistas','Peatones','Pasajeros de auto'];
  let arraySuma = [];
  for (let i = 0; i < arrTypeCausantes.length; i++) {
      let suma = 0;
      let obj = {};
      for (let a = 0; a < data.length; a++) {
          if (typeof data[a][arrTypeCausantes[i]] === 'number') {
              suma += data[a][arrTypeCausantes[i]];
          }
      }
      obj[[arrTypeCausantes[i]]] = suma
      arraySuma.push(obj)
  }
  // console.log(arraySuma);
  return arraySuma; 
};
  
const sortIndDes = (data) => {
  const sortedInd = data.sort( (a, b) => {
    let aa = Object.values(a)[0]
    let bb = Object.values(b)[0]
    
    if(aa < bb) {
      return 1;
    } else if (aa > bb){
      return -1;
    } else {
      return 0;
    }
  });
  // console.log(sortedInd)
  return sortedInd;
}

const sortIndAsc = (data) => {
  const sortedInd = data.sort( (a, b) => {
    let aa = Object.values(a)[0]
    let bb = Object.values(b)[0]
    
    if(aa > bb) {
      return 1;
    } else if (aa < bb){
      return -1;
    } else {
      return 0;
    }
  });
  // console.log(sortedInd)
  return sortedInd;
}

window.data = {
  filterByYear,
  sortYearAsc,
  sortYearDsc,
  sumOfValuesByInd,
  sortByIndValuesASC,
  sortByIndValuesDSC
};