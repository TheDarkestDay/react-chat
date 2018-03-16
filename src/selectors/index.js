import { createSelector } from 'reselect';

const getUser = (state) => state.auth.user;
const getActiveChat = (state) => state.chat.activeChat;
const getChats = (state) => state.chat.chats;
const isAllChatsAreDisplayed = (state) => state.chat.isAllChatsAreDisplayed;

const _isMember = (currentUser, activeChat) => activeChat.members.find((user) => user._id === currentUser._id);
const _isCreator = (currentUser, activeChat) => activeChat.creator._id === currentUser._id;

export const isMember = createSelector(
    [getUser, getActiveChat],
    (currentUser, activeChat) => {
        if (!activeChat || !currentUser) {
            return false;
        }

        return _isMember(currentUser, activeChat);
    }
)

export const isCreator = createSelector(
    [getUser, getActiveChat],
    (currentUser, activeChat) => {
        if (!activeChat || !currentUser) {
            return false;
        }

        return _isCreator(currentUser, activeChat);
    }
)

export const isAllowedToSendMessages = createSelector(
    [getUser, getActiveChat],
    (currentUser, activeChat) => {
        if (!activeChat || !currentUser) {
            return false;
        }

        return _isMember(currentUser, activeChat) || _isCreator(currentUser, activeChat);
    }
)

export const getVisibleChats = createSelector(
    [getUser, getChats, isAllChatsAreDisplayed],
    (currentUser, chats, isAllChatsAreDisplayed) => {
        if (!currentUser) {
            return chats;
        } 
        
        return isAllChatsAreDisplayed ? chats : currentUser.chats
    }
)