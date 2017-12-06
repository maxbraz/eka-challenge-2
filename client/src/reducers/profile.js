import {
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
} from '../actions';

const signup = (state = {
  isFetching: false,
  hasSaved: false,
  errorMessage: '',
  email: null,
}, action) => {
  switch (action.type) {
  case UPDATE_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case UPDATE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      hasSaved: true,
      errorMessage: '',
      email: action.email,
    };
  case UPDATE_FAILURE:
    return {
      ...state,
      isFetching: false,
      errorMessage: action.message,
    };
  default:
    return state;
  }
};

export default signup;
