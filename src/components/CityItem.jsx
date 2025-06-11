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
  const { currentCity, setCurrentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  const isActive = id === (currentCity?.id ?? null);

  return (
    <li className="mb-3 list-unstyled">
      <Link
        to={`/app/cities/${id}?lat=${position.lat}&lng=${position.lng}`}
        onClick={() => setCurrentCity(city)}
        className="text-decoration-none"
      >
        <div className={`card ${isActive ? "border-primary bg-primary text-white" : "shadow-sm"}`}>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
              <div>
                <h5 className="card-title mb-1">{cityName}</h5>
                <p className="card-subtitle">
                  <time className="badge bg-secondary">{formatDate(date)}</time>
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={(e) => {
                e.preventDefault(); // Prevent navigating on delete
                // Optional: add delete logic here
              }}
            >
              &times;
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CityItem;

