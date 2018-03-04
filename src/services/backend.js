import REST_API from '../constants/rest-api';

const backend = {
  login(credentials) {
    return fetch(REST_API.AUTH.LOGIN, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseBody) => {
      const { message, success } = responseBody;

      if (!success) {
        throw message;
      }

      return responseBody;
    })
  },
  signup(credentials) {
    return fetch(REST_API.AUTH.SIGNUP, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseBody) => {
      const { message, success } = responseBody;

      if (!success) {
        throw message;
      }

      return responseBody;
    })
  }
};

export default backend;