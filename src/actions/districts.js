
import * as types from './districtTypes';
// import ecrewsAPI from '../api/api';

import {
  getUpcomingOutages,
  setUpcomingOutages,
  getPastOutages,
  setPastOutages,
  setCircuitList,
} from './outages';

export const setDistricts = districtList => ({
  type: types.SET_DISTRICTS,
  districtList,
});

export const setHomeDistrict = homeDistrict => ({
  type: types.SET_HOME_DISTRICT,
  homeDistrict,
});

export const setSelectedDistrict = district => ({
  type: types.SET_SELECTED_DISTRICT,
  district,
});

export const getDistricts = (/* userId */) => {
  const districtList = ['2-Ellis', '3-Villa Park', '4-Valley', '31-Mesa'];

  // TODO: Home district is being set randomly until we can get the district from the user login info
  // const homeDistrict = districtList[Math.floor(Math.random() * districtList.length)];
  const homeDistrict = '2-Ellis';

  return Promise.resolve({
    districtList,
    homeDistrict,
  });
};

export const setNewSelectedDistrict = (setDistrict) => {
  return (dispatch) => {
    return Promise.all([
      dispatch(setSelectedDistrict(setDistrict)),
      getUpcomingOutages(setDistrict)
        .then((upcomingOutages) => {
          dispatch(setUpcomingOutages(upcomingOutages));
        }),
      getPastOutages()
        .then(({ pastOutages, circuitList }) => {
          return Promise.all([
            dispatch(setPastOutages(pastOutages)),
            dispatch(setCircuitList(circuitList)),
          ]);
        }),
    ]);
  };
};

export const fetchDistricts = () => {
  return (dispatch) => {
    return getDistricts()
      .then((districts) => {
        const { homeDistrict, districtList } = districts;
        Promise.all([
          dispatch(setDistricts(districtList)),
          dispatch(setHomeDistrict(homeDistrict)),
          dispatch(setNewSelectedDistrict(homeDistrict)),
        ]);
      });
  };
};

