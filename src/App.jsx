import Homepage from './Pages/Homepage';
import Pricing from './Pages/Pricing';
import Product from './Pages/Product';
import AppLayout from './Pages/AppLayout'
import PageNotFound from './Pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import CityList from './components/CityList';
import City from './components/City';
import Form from './components/Form';
import CountriesList from './components/CountryList';
import { CitiesProvider } from './contexts/CitiesContext';
// import { Navigate } from 'react-router-dom';

const App = () => {

  return (
    <CitiesProvider>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='login' element={<Login/>}/>
          <Route path='app' element={<AppLayout/>}>
            {/* <Route index element={<Navigate replace to="cities"/>}/> */}
            <Route index  element={<CityList/>}/>
            <Route  path='cities' element={<CityList/>}/>
            <Route path='cities/:id' element={<City/>}/>
            <Route  path='countries'  element={<CountriesList/>}/>
            {/* <Route path='countries' element={<p>Countries</p>}/> */}
            <Route path='form' element={<Form/>}/>
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </CitiesProvider>
  );
};

export default App;
