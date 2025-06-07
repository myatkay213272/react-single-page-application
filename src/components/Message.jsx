import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return (
    <p>
      <span>{message}</span>
    </p>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
