export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const requestUpdate = () => ({
  type: UPDATE_REQUEST,
});

export const receiveUpdate = () => ({
  type: UPDATE_SUCCESS,
});

export const updateError = message => ({
  type: UPDATE_FAILURE,
  message,
});

export const updateProfile = (id) => {
  // dispatch(requestUpdate());

  return {
    type: 'UPDATE_REQUEST',
    payload: id,
  }
};
