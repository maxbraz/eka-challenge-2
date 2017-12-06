import { combineReducers } from 'redux';

import profile from './profile';
import address from './address';
import nameAndPhone from './nameAndPhone';

const rootReducer = combineReducers({
  profile,
  address,
  nameAndPhone,
});

export default rootReducer;
