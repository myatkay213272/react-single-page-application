import PropTypes from 'prop-types'

const CountryItem = ({ country }) => {
  return (
    <li className="list-group-item d-flex align-items-center gap-3">
      <span style={{ fontSize: '1.5rem' }}>{country.emoji}</span>
      <span className="flex-grow-1">{country.country}</span>
    </li>
  );
};

CountryItem.propTypes = {
    country : PropTypes.shape({
        country : PropTypes.string.isRequired,
        emoji : PropTypes.string.isRequired
    }).isRequired
}

export default CountryItem