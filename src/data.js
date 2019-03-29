const newData = (data) => {
  let newInjuries = [];

  for (let i = 0; i < data.length; i++) {
    const newObj = {
      'Año' : data[i].Year,
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


const showByYear = (data, sectionPainted) => {
  let newDiv= [];
  for (let i = 0; i < data.length; i++) {

      newDiv[i] = document.createElement("DIV");
      newDiv[i].className = "containerA";
  
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
      newDiv[i].innerHTML = yearTemp;
      sectionPainted.appendChild(newDiv[i]);
  }
}

const filterByYear = (data, year) => {
  let result = [];
  for(let i = 0; i < data.length; i++) {
    if (parseInt(year) === parseInt(data[i]['Año'])){
      result.push(data[i]);
    }
  }
  return result;
}

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

const showAverageByIndicator = (indicator, average, sectionPainted) => {
  let newDiv = document.createElement("DIV")
  let avrTemp = `
      <h2>${indicator}</h2>
      <p>En promedio, anualmente, han habido ${average} ${indicator} heridos. </p>
  `
  newDiv.innerHTML = avrTemp;
  sectionPainted.appendChild(newDiv);
}