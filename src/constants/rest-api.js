
const API_ROOT = 'http://localhost:8080/v1';

const REST_API = {
  AUTH: {
    LOGIN: `${API_ROOT}/login`,
    SIGNUP: `${API_ROOT}/signup`
  },
  USERS: {
    WHOAMI: `${API_ROOT}/users/me`
  },
  CHATS: {
    BASE: `${API_ROOT}/chats`,
    MY: `${API_ROOT}/chats/me`,
    JOIN: (chatId) => `${API_ROOT}/chats/${chatId}/join` 
  }
};

export default REST_API;