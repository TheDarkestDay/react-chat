
import { API_ROOT } from './config';

const REST_API = {
  AUTH: {
    LOGIN: `${API_ROOT}/login`,
    SIGNUP: `${API_ROOT}/signup`
  },
  USERS: {
    BASE: `${API_ROOT}/users`,
    WHOAMI: `${API_ROOT}/users/me`
  },
  CHATS: {
    BASE: `${API_ROOT}/chats`,
    MY: `${API_ROOT}/chats/me`,
    JOIN: (chatId) => `${API_ROOT}/chats/${chatId}/join`,
    LEAVE: (chatId) => `${API_ROOT}/chats/${chatId}/leave` 
  }
};

export default REST_API;