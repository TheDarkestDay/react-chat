import { createSelector } from 'reselect';

const getUser = (state) => state.auth.user;
const getActiveChat = (state) => state.chat.activeChat;

export const isMember = createSelector(
    [getUser, getActiveChat],
    (currentUser, activeChat) => {
        if (!activeChat || !currentUser) {
            return false;
        }
        console.log(activeChat.members.find((user) => user._id === currentUser._id));
        return activeChat.members.find((user) => user._id === currentUser._id);
    }
)