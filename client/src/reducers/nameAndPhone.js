import {
  NAMEANDPHONE_REQUEST,
  NAMEANDPHONE_SUCCESS,
  NAMEANDPHONE_FAILURE,
} from '../actions';

const nameAndPhone = (state = {
  isFetching: false,
  hasSaved: false,
  errorMessage: '',
  userId: null,
}, action) => {
  switch (action.type) {
  case NAMEANDPHONE_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case NAMEANDPHONE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      hasSaved: true,
      errorMessage: '',
      userId: action.userId,
    };
  case NAMEANDPHONE_FAILURE:
    return {
      ...state,
      isFetching: false,
      errorMessage: action.message,
    };
  default:
    return state;
  }
};

export default nameAndPhone;
