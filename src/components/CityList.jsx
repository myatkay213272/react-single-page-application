import PropTypes from 'prop-types';
import Spinner from "./Spinner";
import CityItem from "./CityItem";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  return (
    <ul>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CityList;
