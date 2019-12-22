
import { endOfHour, endOfMinute, addSeconds } from 'date-fns';

import { findOutages, findActivity } from '../../dummyData/mockAPICalls';
import * as types from './outagesTypes';
// import ecrewsAPI from '../api/api';

export const setCurrentLocation = location => ({
  type: types.SET_CURRENT_LOCATION,
  location,
});

export const setUpcomingOutages = outages => ({
  type: types.SET_UPCOMING_OUTAGES,
  outages,
});

export const setPastOutages = outages => ({
  type: types.SET_PAST_OUTAGES,
  outages,
});

export const setCircuitList = circuitList => ({
  type: types.SET_CIRCUIT_LIST,
  circuitList,
});

export const setSelectedUpcomingOutage = outage => ({
  type: types.SET_SELECTED_UPCOMING_OUTAGE,
  outage,
});

export const setSelectedPastOutage = outage => ({
  type: types.SET_SELECTED_PAST_OUTAGE,
  outage,
});

export const addUpdatedStartTime = (updatedStart) => {
  return {
    type: types.ADD_UPDATED_START_TIME,
    updatedStart,
  };
};

export const setTime = (timeType, inputTime) => ({
  type: types[timeType],
  inputTime,
});

// TODO: EVENTUALLY THIS SHOULD SHIFT TO BACKEND
export const testCalculateETA = (position) => {
  const currentTime = Date(position.currentTime);
  const travelTimeInSeconds = 18000;
  const calculatedETA = addSeconds(endOfHour(endOfMinute(currentTime)), travelTimeInSeconds);
  return Promise.resolve(calculatedETA);
};

export const calculateSetDefaultETA = (position) => {
  return (dispatch) => {
    // return axios.post(
    //     '/distanceMatrix',
    return testCalculateETA({
      long: position.coords.longitude,
      lat: position.coords.latititude,
      currentTime: position.coords.timestamp,
    })
    // )
      .then((calculatedETA) => {
        return Promise.all([
          dispatch(setTime('SET_ETA', calculatedETA)),
          dispatch(setTime('SET_INITIAL_ETA', calculatedETA)),
        ]);
      });
  };
};

export const setInitialERT = (ERT) => {
  return (dispatch) => {
    dispatch(setTime('SET_ERT', ERT));
    dispatch(setTime('SET_INITIAL_ERT', ERT));
  };
};

export const updateERTWithReason = updatedERT => ({
  type: types.UPDATE_ETR_WITH_REASON,
  updatedERT,
});

export const confirmALU = ALU => ({
  type: types.CONFIRM_ALU,
  ALU,
});

export const getUpcomingOutages = async (setDistrict) => {
  // const upcomingOutages = await ecrewsAPI.get('/outages', { outageType: 'upcoming', district: setDistrict });
  const upcomingOutages = await findOutages({ outageType: 'upcoming', district: setDistrict });
  console.log(upcomingOutages);
  return Promise.resolve(upcomingOutages);
};

export const getPastOutages = async (currentViewDate = new Date() /* , crewId */) => {
  // TODO: Determine strategy depending on crewId vs response latency and filter decisions
  // const outages = await ecrewsAPI.get('/outages', { outageType: 'past', /* crewId, */ currentViewDate });
  const outages = await findOutages({ outageType: 'past', /* crewId, */ currentViewDate });
  console.log(outages);
  return Promise.resolve(outages);
};

export const getActivityLog = async (outageId) => {
  // const outageActivity = await ecrewsAPI.get('/activity-log', { outageId });
  const outageActivity = await findActivity({ outageId });
  return Promise.resolve(outageActivity);
};

export const setActivityLog = outageActivity => ({
  type: types.SET_ACTIVITY_LOG,
  outageActivity,
});

export const fetchActivityLog = (outageId) => {
  return (dispatch) => {
    return getActivityLog(outageId)
      .then((outageActivity) => {
        dispatch(setActivityLog(outageActivity));
        Promise.resolve(outageId);
      })
      .catch((error) => {
        console.error(`Error fetching activity log for outage #${outageId}: ${error}`);
      });
  };
};

export const fetchPastOutages = (currentViewDate) => {
  return (dispatch) => {
    getPastOutages(currentViewDate)
      .then(({ pastOutages, circuitList }) => {
        return Promise.all([
          dispatch(setPastOutages(pastOutages)),
          dispatch(setCircuitList(circuitList)),
        ]);
      })
      .catch((error) => {
        console.error(`Error fetching past outages: ${error}`);
      });
  };
};

//  TODO: convert all to use async/await:
// export const fetchPastOutages = (currentViewDate) => {
//   return async (dispatch) => {
//     const pastOutages = await getPastOutages(currentViewDate);
//     dispatch(setPastOutages(pastOutages));
//   };
// };

