
const API_ROOT = 'http://localhost:8083/v1';

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
    MY: `${API_ROOT}/chats/me`
  }
};

export default REST_API;