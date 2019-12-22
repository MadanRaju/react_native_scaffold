import generateNewDummyData from './generateNewDummyData';

export const findOutages = async (params) => {
  const { outageType } = params;
  if (outageType === 'upcoming') {
    const { district } = params;
    const outageListByDistrict = await generateNewDummyData({ outageType, district });
    // Location: outage.Location.slice(0, 40),
    // Problem: outage.Problem.replace('-SCE Crew', ''),
    // Cause: outage.Cause.split('\\')[0],

    return outageListByDistrict;
  } else if (outageType === 'past') {
    const allCapsCircuitList = [];

    const { currentViewDate, crewId } = params;
    const pastOutagesNoActivity = await generateNewDummyData({ outageType, currentViewDate, crewId });
    pastOutagesNoActivity.forEach((outage) => {
      if (allCapsCircuitList.indexOf(outage.Circuit) === -1) {
        allCapsCircuitList.push(outage.Circuit);
      }
    });
    const circuitList = allCapsCircuitList.map(circuit => (
      circuit.slice(0, 1) + circuit.slice(1).toLowerCase()
    ));
    const pastOutages = pastOutagesNoActivity.map((outage) => {
      return {
        ...outage,
        activityLog: [
          {
            action: 'Confirmed ALU',
            value: '5/19/2018 5:00:00 PM',
            timeOfAction: new Date(),
            reason: null,
            user: 123,
            outageId: 1,
          },
          {
            action: 'Updated ALU',
            value: '5/19/2018 5:00:00 PM',
            timeOfAction: new Date(),
            reason: 'Other - Waiting for equipment',
            user: 123,
            outageId: 1,
          },
          {
            action: 'Updated ERT',
            value: '5/19/2018 5:00:00 PM',
            reason: 'Weather',
            timeOfAction: new Date(),
            user: 123,
            outageId: 1,
          },
          {
            action: 'Confirmed ERT',
            value: '5/19/2018 5:00:00 PM',
            reason: null,
            timeOfAction: new Date(),
            user: 123,
            outageId: 1,
          },
          {
            action: 'Confirmed Outage Start Time',
            value: '5/19/2018 5:00:00 PM',
            reason: null,
            timeOfAction: new Date(),
            user: 456,
            outageId: 1,
          },
          {
            action: 'Confirm Arrival Time',
            value: '5/19/2018 5:00:00 PM',
            reason: null,
            timeOfAction: new Date(),
            user: 456,
            outageId: 1,
          },
          {
            action: 'Confirmed ETA',
            value: '5/19/2018 5:00:00 PM',
            reason: null,
            timeOfAction: new Date(),
            user: 456,
            outageId: 1,
          },
          {
            action: 'Accepted Outage',
            value: '5/19/2018 5:00:00 PM',
            reason: null,
            timeOfAction: new Date(),
            user: 456,
            outageId: 1,
          },
        ],
      };
    });
    return { pastOutages, circuitList };
  }
  throw new Error(`Incorrect outageType passed to find: ${outageType}`);
};

export const findActivity = () => {
  return [
    {
      action: 'Confirmed ALU',
      value: '5/19/2018 5:00:00 PM',
      reason: null,
      timeOfAction: new Date(),
      user: 123,
      outageId: 1,
      handoffIndex: 1,
    },
    {
      action: 'Confirmed ALU',
      value: '5/19/2018 5:00:00 PM',
      timeOfAction: new Date(),
      reason: 'Other - Waiting for equipment',
      user: 123,
      outageId: 1,
      handoffIndex: 1,
    },
    {
      action: 'Confirmed ERT',
      value: '5/19/2018 5:00:00 PM',
      reason: null,
      timeOfAction: new Date(),
      user: 123,
      outageId: 1,
      handoffIndex: 1,
    },
    {
      action: 'Confirmed Outage Start Time',
      value: '5/19/2018 5:00:00 PM',
      reason: null,
      timeOfAction: new Date(),
      user: 456,
      outageId: 1,
      handoffIndex: 1,
    },
    {
      action: 'Confirmed ETA',
      value: '5/19/2018 5:00:00 PM',
      reason: null,
      timeOfAction: new Date(),
      user: 456,
      outageId: 1,
      handoffIndex: 1,
    },
    {
      action: 'Accepted Outage',
      value: '5/19/2018 5:00:00 PM',
      reason: null,
      timeOfAction: new Date(),
      user: 456,
      outageId: 1,
      handoffIndex: 1,
    },
  ];
};
