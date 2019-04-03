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
  return newInjuries
};

const filterByYear = (data, year) => {
  const result = [];
  for(let i = 0; i < data.length; i++) {
    if (parseInt(year) === parseInt(data[i]['Año'])){
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
  const propiedades = ["Ciclistas", "Tripulantes", "Ocupantes de bus", "Motociclistas", "Peatones", "Pasajeros de auto"];
  const theObj = {"Tripulantes" : 0, "Ciclistas" : 0, "Ocupantes de bus": 0, "Motociclistas" : 0, "Peatones" : 0, "Pasajeros de auto" : 0};

  for(let i = 0; i < data.length; i++){
    for(let e = 0; e < propiedades.length; e++){
      if (typeof data[i][propiedades[e]] === 'number') {
        theObj[propiedades[e]] += data[i][propiedades[e]]
      }
    }
  }
  return theObj;
}
