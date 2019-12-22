// import { addHours } from 'date-fns';
import * as types from '../actions/outagesTypes';

const initialState = {
  upcomingOutages: [],
  pastOutages: [],
  selectedUpcomingOutage: {
    arrivalTime: new Date(),
    currentStartTime: new Date(),
    calculatedInitialETA: new Date(),
    initialERT: new Date(),
    updatedERTList: [],
    ALU: new Date(),
    startTimesList: [],
    activityLog: [],
  },
  circuitList: [],
  selectedPastOutage: {},
  currentLocation: {
    latitude: 37.785834,
    longitude: -122.406417,
  },
};

// updatedERTList: [{
//   newERT: format(new Date()),
// }],
// startTimesList: [{
//   newStartTime: format(new Date()),
//   reason: 'initial',
// }],

const outages = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.currentLocation,
      };
    case types.SET_UPCOMING_OUTAGES:
      return {
        ...state,
        upcomingOutages: action.outages,
      };
    case types.SET_PAST_OUTAGES:
      return {
        ...state,
        pastOutages: action.outages,
      };
    case types.SET_CIRCUIT_LIST:
      return {
        ...state,
        circuitList: action.circuitList,
      };
    case types.SET_SELECTED_UPCOMING_OUTAGE:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          ...action.outage,
        },
      };
    case types.SET_SELECTED_PAST_OUTAGE:
      return {
        ...state,
        selectedPastOutage: {
          ...state.selectedPastOutage,
          ...action.outage,
        },
      };
    case types.SET_ETA:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          ETA: action.inputTime,
        },
      };
    case types.SET_INITIAL_ETA:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          calculatedInitialETA: action.inputTime,
        },
      };
    case types.SET_ARRIVAL_TIME:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          arrivalTime: action.inputTime,
        },
      };
    case types.SET_CURRENT_START_TIME:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          currentStartTime: action.inputTime,
        },
      };
    case types.ADD_UPDATED_START_TIME:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          currentStartTime: action.updatedStart.newStartTime,
          startTimesList: [...state.selectedUpcomingOutage.startTimesList, action.updatedStart],
        },
      };
    case types.SET_ERT:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          ERT: action.inputTime,
        },
      };
    case types.SET_INITIAL_ERT:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          initialERT: action.inputTime,
        },
      };
    case types.UPDATE_ETR_WITH_REASON:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          ERT: action.updatedERT.newERT,
          updatedERTList: [...state.selectedUpcomingOutage.updatedERTList, action.updatedERT],
        },
      };
    case types.CONFIRM_ALU:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          ALU: action.ALU,
        },
      };
    case types.SET_ACTIVITY_LOG:
      return {
        ...state,
        selectedUpcomingOutage: {
          ...state.selectedUpcomingOutage,
          activityLog: action.outageActivity,
        },
      };
    default:
      return state;
  }
};

export default outages;
