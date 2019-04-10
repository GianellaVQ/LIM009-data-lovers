global.window = global;
require('../src/data.js');
require('../src/data/injuries/injuries.jS');

const dataInjuries = newData(INJURIES);
const filters = [
    {
      'Año': 1970,
      'Tripulantes': 780,
      'Ciclistas': '--',
      'Ocupantes de bus': '--',
      'Motociclistas': '--',
      'Peatones': '--',
      'Pasajeros de auto': '--'
    }
  ];
  let conditionFilter = 1970;

  const yearAsc = [
    {
      'Año': 2014,
      'Tripulantes': 2678,
      'Ciclistas': 50000,
      'Ocupantes de bus': 14000,
      'Motociclistas': 92000,
      'Peatones': 65000,
      'Pasajeros de auto': 1292000
    },
    {
      'Año': 2015,
      'Tripulantes': 2679,
      'Ciclistas': 45000,
      'Ocupantes de bus': "--",
      'Motociclistas': 88000,
      'Peatones': 70000,
      'Pasajeros de auto': 1378000
    },
    {
      'Año': 2016,
      'Tripulantes': '--',
      'Ciclistas': '--',
      'Ocupantes de bus': '--',
      'Motociclistas': '--',
      'Peatones': '--',
      'Pasajeros de auto': '--'
    }
  ];

  const yearDsc = [
    {
      'Año': 2016,
      'Tripulantes': '--',
      'Ciclistas': '--',
      'Ocupantes de bus': '--',
      'Motociclistas': '--',
      'Peatones': '--',
      'Pasajeros de auto': '--'
    },
    {
      'Año': 2015,
      'Tripulantes': 2679,
      'Ciclistas': 45000,
      'Ocupantes de bus': "--",
      'Motociclistas': 88000,
      'Peatones': 70000,
      'Pasajeros de auto': 1378000
    },
    {
      'Año': 2014,
      'Tripulantes': 2678,
      'Ciclistas': 50000,
      'Ocupantes de bus': 14000,
      'Motociclistas': 92000,
      'Peatones': 65000,
      'Pasajeros de auto': 1292000
    }
  ];

const indicator = [
  {
    'Tripulantes': 105799
  },
  {
    'Ciclistas': 1382527
  },
  {
    'Ocupantes de bus': 426387
  },
  {
    'Motociclistas': 1926076
  },
  {
    'Peatones': 1970588
  },
  {
    'Pasajeros de auto': 46994253
  }
];

const indicadorDsc = [
  {
    'Pasajeros de auto': 46994253
  },
  {
    'Peatones': 1970588
  },
  {
    'Motociclistas': 1926076
  },
  {
    'Ocupantes de bus': 426387
  },
  {
    'Ciclistas': 1382527
  },
  {
    'Tripulantes': 105799
  }
];
const indicadorAsc = [
  {
    'Tripulantes': 105799
  },
  {
    'Ciclistas': 1382527
  },
  {
    'Ocupantes de bus': 426387
  },
  {
    'Motociclistas': 1926076
  },
  {
    'Peatones': 1970588
  },
  {
    'Pasajeros de auto': 46994253
  }
];

describe('filterByYear', () => {

  it('debería ser una función', () => {
    expect(typeof filterByYear).toBe('function');
  });

  it('debería retornar un array con objetos según la condición', () => {
    expect(filterByYear(dataInjuries, conditionFilter)).toEqual(filters);
  });
});

describe('sortYear', () => {

  it('debería ser una función', () => {
    expect(typeof sortYear).toBe('function');
  });

  it('debería retornar un array con objetos en orden descendente de 2016 a 1960', () => {
    expect(sortYear(yearAsc,'DSC')).toEqual(yearDsc);
  });

  it('debería retornar un array con objetos en orden descendente de 1960 a 2016', () => {
        expect(sortYear(yearDsc,'ASC')).toEqual(yearAsc);
  });
});

describe('sumOfValuesByInd', () => {

  it('debería ser una función', () => {
    expect(typeof sumOfValuesByInd).toBe('function');
  });

  it('debería retornar un array con objetos con un solo indicador la suma total del mismo indicador', () => {
    expect(sumOfValuesByInd(dataInjuries)).toEqual(indicator);
  });
});

describe('sortByIndValues', () => {

  it('debería ser una función', () => {
    expect(typeof sortByIndValues).toBe('function');
  });

  it('debería retornar un array con objetos por indicador con su suma total de + a -', () => {
    expect(sortByIndValues(indicadorAsc,'DSC')).toEqual(indicadorDsc);
  });

  it('debería retornar un array con objetos por indicador coon su suma total de - a +', () => {
        expect(sortByIndValues(indicadorDsc,'ASC')).toEqual(indicadorAsc);
  });
});

  
  
