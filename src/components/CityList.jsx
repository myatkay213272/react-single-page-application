import PropTypes from 'prop-types';
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from './Message';

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;


  if(!cities.length) return <Message message="Add your first city by clicking on the city on the map"/>


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
