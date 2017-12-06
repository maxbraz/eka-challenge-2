export const NAMEANDPHONE_REQUEST = 'NAMEANDPHONE_REQUEST';
export const NAMEANDPHONE_SUCCESS = 'NAMEANDPHONE_SUCCESS';
export const NAMEANDPHONE_FAILURE = 'NAMEANDPHONE_FAILURE';


export const requestNameAndPhoneUpdate = () => ({
  type: NAMEANDPHONE_REQUEST,
});

export const receiveNameAndPhoneUpdate = () => ({
  type: NAMEANDPHONE_SUCCESS,
});

export const nameAndPhoneError = message => ({
  type: NAMEANDPHONE_FAILURE,
  message,
});

export const updateNameAndPhone = profile => (dispatch) => {
  dispatch(nameAndPhoneUpdate());

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(profile),
    headers,
  };

  return fetch('/nameAndPhone', options)
    .then(res => res.text())
    .then(() => dispatch(nameAndPhoneUpdate()))
    .catch(err => dispatch(nameAndPhoneError(err)));
};
