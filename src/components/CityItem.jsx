import PropTypes from 'prop-types';

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
};

const CityItem = ({ city }) => {
  const { cityName, emoji, date } = city;

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
        <div>
          <div>{cityName}</div>
          <time className="badge bg-secondary">{formatDate(date)}</time>
        </div>
      </div>
      <button type="button" className="btn btn-sm btn-outline-danger">
        &times;
      </button>
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
