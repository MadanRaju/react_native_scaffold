import * as types from '../actions/districtTypes';

const initialState = {
  districtList: [],
  homeDistrict: '',
  selectedDistrict: '',
};

const districts = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DISTRICTS:
      return {
        ...state,
        districtList: action.districtList,
      };
    case types.SET_SELECTED_DISTRICT:
      return {
        ...state,
        selectedDistrict: action.district,
      };
    case types.SET_HOME_DISTRICT:
      return {
        ...state,
        homeDistrict: action.homeDistrict,
      };
    default:
      return state;
  }
};

export default districts;
