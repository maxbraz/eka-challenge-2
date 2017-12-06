import {
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
} from '../actions';

const signup = (state = {
  id: '',
}, action) => {
  switch (action.type) {
  case UPDATE_REQUEST:
    return {
      ...state,
      isFetching: true,
      id: action.payload
    };
  case UPDATE_SUCCESS:
    return {
      ...state,
      id: action.payload,
    };
  case UPDATE_FAILURE:
    return {
      ...state,
      errorMessage: action.message,
    };
  default:
    return state;
  }
};

export default signup;
