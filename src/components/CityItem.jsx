import PropTypes from 'prop-types';

const CityItem = ({ city }) => {
  const { cityName, emoji, date } = city;

  return (
    <li className="list-group-item d-flex align-items-center gap-3">
      <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
      <span className="flex-grow-1">{cityName}</span>
      <span className="badge bg-secondary">{date}</span>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityItem;
