
const {
  subDays, addDays, addHours, format, isAfter, isBefore,
} = require('date-fns');

const dummyData = require('../dummyData/data.json');

const generateNewDummyData = (options, inputDummyData = dummyData) => {
  let startDate = addHours(new Date(), 1);
  let endDate = addDays(startDate, 1);
  let slicedDummyData = inputDummyData;
  if (options.outageType === 'past') {
    slicedDummyData = inputDummyData.length > 90 ? inputDummyData.slice(0, 90) : inputDummyData;
  }
  const circuitList = {};

  const returnObj = slicedDummyData.map((outage) => {
    if (options.outageType === 'past') {
      startDate = subDays(new Date(), (Math.random() * slicedDummyData.length));
      endDate = addHours(startDate, 3);
    } else if (options.outageType === 'past' && !!options.multipleDays) {
      startDate = subDays(new Date(), (Math.random() * 90));
      endDate = addDays(startDate, options.multipleDays);
    } else if (options.outageType === 'upcoming' && !!options.multipleDays) {
      endDate = addDays(startDate, options.multipleDays);
    } else if (options.outageType === 'upcoming' && !!options.specificHours) {
      endDate = addHours(startDate, options.specificHours);
    }
    const OutageStartDate = format(startDate, 'M/DD/YYYY h:mm:ss A');
    const OutageEndDate = format(endDate, 'M/DD/YYYY h:mm:ss A');
    const ERT = format(addHours(Date.now(), 7), 'M/DD/YYYY h:mm:ss A');
    circuitList[outage.Circuit] = outage.Circuit;
    return {
      ...outage,
      OutageStartDate,
      OutageEndDate,
      ERT,
    };
  });

  if (options.outageType === 'upcoming' && options.district) {
    return returnObj.filter(outage => (
      outage.District.toLowerCase() === options.district.toLowerCase()
    ));
  }

  if (options.outageType === 'past' && options.currentViewDate) {
    return returnObj.filter((outage) => {
      const ninetyDaysBeforeCurrent = subDays(options.currentViewDate, 90);
      const withinWindow = isAfter(outage.OutageEndDate, ninetyDaysBeforeCurrent)
        && isBefore(outage.OutageEndDate, options.currentViewDate);
      return withinWindow;
    });
  }

  // if (options.outageType === 'past' && options.crewId) {
  //   return returnObj.filter((outage) => {
  //     return outage.crewId === options.crewId;
  //   });
  // }

  // console.log(Object.keys(circuitList));
  return returnObj;
};

module.exports = generateNewDummyData;

// {
//   "District": "8-LIGHTHIPE",
//   "Circuit": "WAYSIDE",
//   "IncidentType": "Unplanned Outage",
//   "OutageStartDate": "5/24/2018 11:54:00 AM",
//   "OutageEndDate": "5/24/2018 2:29:20 PM",
//   "ERT": "",
//   "Cause": "SOURCE\\SUBSTATION\\LOST",
//   "Problem": "Wide Spread Outage(Circuit L/O)",
//   "RepairOrder": "",
//   "Location": "COMPTON BLVD. E/O AVALON,,WEST COMPTON",
//   "OAN number": 879324,
//   "Incident Number": 119381788,
//   "Structure": "N1907301",
//   "Customers Affected": "118"
// },

// const circuitList = ['CALCIUM',
//   'CRONIN',
//   'MODJESKA',
//   'MUIRLANDS',
//   'TRIPAS',
//   'ARBORETUM',
//   'BILTON',
//   'FLORAL',
//   'HONOR',
//   'PAT',
//   'RAVINE',
//   'ROSEMONT',
//   'SAINT JO',
//   'FLEETWOOD',
//   'AVENIDA',
//   'BOBBIT',
//   'BONITA',
//   'BRYDON',
//   'CALORA',
//   'LEVEL',
//   'NUBIA',
//   'SPANADA',
//   'VENGEANCE',
//   'BLIZZARD',
//   'MAGENTA',
//   'MASSACHUSETTS',
//   'ALCALDE',
//   'BAZOOKA',
//   'EDWIN',
//   'NEAPOLITAN',
//   'PALOMINO',
//   'PLUMMER',
//   'SNYDER',
//   'ARDMORE',
//   'CASWELL',
//   'DECOY',
//   'HOLMES',
//   'HUB CITY',
//   'JURY',
//   'KALMIA',
//   'LANTANA',
//   'OTIS',
//   'PENROSE',
//   'PRINCE',
//   'REASONER',
//   'STARBOARD',
//   'TICHENOR',
//   'WAYSIDE',
//   'WHITSETT',
// ];
