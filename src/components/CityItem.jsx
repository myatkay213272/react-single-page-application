import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
};

const CityItem = ({ city }) => {
  const {currentCity} = useCities()
  const { cityName, emoji, date,id ,position} = city;

  return (
    <li>
     <Link 
        to={`/app/cities/${id}?lat=${position.lat}&lng=${position.lng}`}
        className="list-group-item d-flex align-items-center justify-content-between">
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
     </Link>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id : PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    position : PropTypes.shape({
      lat : PropTypes.number.isRequired,
      lng : PropTypes.number.isRequired
    }).isRequired,
  }).isRequired,
};

export default CityItem;