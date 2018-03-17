import REST_API from '../constants/rest-api';

function createGetRequest(url, dataPath) {
  const token = localStorage.getItem('token');

  return fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((responseBody) => processResponse(responseBody, dataPath));
}

function createPostRequest(url, requestBody, dataPath) {
  const token = localStorage.getItem('token');

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ data: requestBody }),
    headers: {
      'Authorization': `Bearer ${token}`,
      'content-type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((responseBody) => processResponse(responseBody, dataPath))
}

function processResponse(responseBody, dataPath) {
  const { message, success } = responseBody;

  if (!success) {
    throw message;
  }

  return responseBody[dataPath];
}

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
      .then((responseBody) => processResponse(responseBody, 'token'));
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
      .then((responseBody) => processResponse(responseBody, 'token'));
  },
  getWhoami() {
    return createGetRequest(REST_API.USERS.WHOAMI, 'user');
  },
  getChats() {
    return createGetRequest(REST_API.CHATS.BASE, 'chats');
  },
  createChat(chatTitle) {
    return createPostRequest(REST_API.CHATS.BASE, chatTitle, 'chat');
  },
  joinChat(chatId) {
    return createGetRequest(REST_API.CHATS.JOIN(chatId), 'chat');
  },
  deleteChat(chatId) {
    const token = localStorage.getItem('token');

    return fetch(`${REST_API.CHATS.BASE}/${chatId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => response.json())
    .then((responseBody) => processResponse(responseBody, 'chat'));
  },
  leaveChat(chatId) {
    return createGetRequest(REST_API.CHATS.LEAVE(chatId), 'chat');
  }
};

export default backend;