import Homepage from './Pages/Homepage';
import Pricing from './Pages/Pricing';
import Product from './Pages/Product';
import AppLayout from './Pages/AppLayout'
import PageNotFound from './Pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import CityList from './components/CityList';
import { useEffect, useState } from 'react';
import CountriesList from './components/CountryList';

const BASE_URL = 'http://localhost:8000'

const App = () => {

  const [cities,setCities] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    const fetchCities =async ()=>{
      try{
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
        console.log(data)
      }catch(err){
        alert('There was an error loading data....')
      } finally{
        setIsLoading(false)
      }
    }  
    fetchCities()
  },[])

  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='app' element={<AppLayout/>}>
          <Route index 
            element={<CityList 
                      cities={cities} 
                      isLoading={isLoading}/>}/>
          <Route 
            path='cities' 
            element={<CityList
                        cities={cities}
                        isLoading={isLoading}
                      />}/>
          <Route 
            path='countries' 
            element={<CountriesList
                        cities={cities}
                        isLoading={isLoading}
                    />}/>
          <Route path='countries' element={<p>Countries</p>}/>
          <Route path='form' element={<p>Form</p>}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
