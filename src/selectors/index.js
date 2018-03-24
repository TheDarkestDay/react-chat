import { createSelector } from 'reselect';

const getUser = state => state.auth.user;
const getActiveChatId = state => state.chat.activeChatId;
const getChats = state => state.chat.chats;
const getChatQuery = state => state.chat.chatQuery;
const getIsAllChatsAreDisplayed = state => state.chat.isAllChatsAreDisplayed;

const _isMember = (currentUser, activeChat) =>
  activeChat.members.find(user => user._id === currentUser._id);

const _isCreator = (currentUser, activeChat) =>
  activeChat.creator._id === currentUser._id;

export const getActiveChat = createSelector(
  [getChats, getActiveChatId],
  (chats, activeChatId) => chats.find(chat => chat._id === activeChatId),
);

export const isMember = createSelector(
  [getUser, getActiveChat],
  (currentUser, activeChat) => {
    if (!activeChat || !currentUser) {
      return false;
    }

    return _isMember(currentUser, activeChat);
  },
);

export const isCreator = createSelector(
  [getUser, getActiveChat],
  (currentUser, activeChat) => {
    if (!activeChat || !currentUser) {
      return false;
    }

    return _isCreator(currentUser, activeChat);
  },
);

export const isAllowedToSendMessages = createSelector(
  [getUser, getActiveChat],
  (currentUser, activeChat) => {
    if (!activeChat || !currentUser) {
      return false;
    }

    return _isMember(currentUser, activeChat) || _isCreator(currentUser, activeChat);
  },
);

export const getVisibleChats = createSelector(
  [getUser, getChats, getChatQuery, getIsAllChatsAreDisplayed],
  (currentUser, chats, chatQuery, isAllChatsAreDisplayed) => {
    if (!currentUser) {
      return chats;
    }

    if (chatQuery) {
      return chats.filter(chat => chat.title.indexOf(chatQuery) > -1);
    }

    if (!isAllChatsAreDisplayed) {
      return chats.filter(chat => _isMember(currentUser, chat) || _isCreator(currentUser, chat));
    }

    return chats;
  },
);
