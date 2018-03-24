import PropTypes from 'prop-types';

export const User = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
});

export const Chat = PropTypes.shape({
  _id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  creator: User,
  members: PropTypes.arrayOf(User),
});

export const Message = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  chatId: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  statusMessage: PropTypes.bool,
  sender: User,
});
