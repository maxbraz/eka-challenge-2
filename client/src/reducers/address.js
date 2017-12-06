import {
  ADDRESS_REQUEST,
  ADDRESS_SUCCESS,
  ADDRESS_FAILURE,
} from '../actions';

const address = (state = {
  isFetching: false,
  hasSaved: false,
  errorMessage: '',
  id: '',
}, action) => {
  switch (action.type) {
  case ADDRESS_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case ADDRESS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      hasSaved: true,
      errorMessage: '',
      id: action.id,
    };
  case ADDRESS_FAILURE:
    return {
      ...state,
      isFetching: false,
      errorMessage: action.message,
    };
  default:
    return state;
  }
};

export default address;
