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
  },
  getWhoami() {
    const token = localStorage.getItem('token');

    return fetch(REST_API.USERS.WHOAMI, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response => response.json()))
    .then((responseBody) => {
      const { success, message, user } = responseBody;

      if (!success) {
        throw message;
      }

      return user;
    })
  },
  getChats() {
    const token = localStorage.getItem('token');

    return fetch(REST_API.CHATS.BASE, {
      headers: {
        'Authorization': `Bearer ${token}`
      } 
    })
    .then((response) => response.json())
    .then((responseBody) => {
      const { message, success, chats } = responseBody;

      if (!success) {
        throw message;
      }

      return chats;
    });
  },
  createChat(chatTitle) {
    const token = localStorage.getItem('token');

    const requestBody = {
      data: {
        title: chatTitle
      }
    };

    return fetch(REST_API.CHATS.BASE, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Authorization': `Bearer ${token}`,
        'content-type': 'application/json'
      } 
    })
    .then((response) => response.json())
    .then((responseBody) => {
      const { message, success, chat } = responseBody;

      if (!success) {
        throw message;
      }

      return chat;
    });
  }
};

export default backend;