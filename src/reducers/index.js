import { combineReducers } from 'redux';

import outages from './outages';
import districts from './districts';

const rootReducer = combineReducers({
  outages,
  districts,
});

export default rootReducer;
