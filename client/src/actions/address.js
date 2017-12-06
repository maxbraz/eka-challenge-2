export const ADDRESS_REQUEST = 'ADDRESS_REQUEST';
export const ADDRESS_SUCCESS = 'ADDRESS_SUCCESS';
export const ADDRESS_FAILURE = 'ADDRESS_FAILURE';


export const addressUpdate = () => ({
  type: ADDRESS_REQUEST,
});

export const addressUpdate = () => ({
  type: ADDRESS_SUCCESS,
});

export const addressError = message => ({
  type: ADDRESS_FAILURE,
  message,
});

export const updateAddress = profile => (dispatch) => {
  dispatch(addressUpdate());

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(profile),
    headers,
  };

  return fetch('/address', options)
    .then(res => res.text())
    .then(() => dispatch(addressUpdate()))
    .catch(err => dispatch(addressError(err)));
};
