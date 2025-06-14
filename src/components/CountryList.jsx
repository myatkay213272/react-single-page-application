import PropTypes from 'prop-types';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';


const CountryList = () => {

  const {cities,isLoading} = useCities()

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the city on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

CountryList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CountryList;
