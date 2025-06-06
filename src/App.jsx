import Homepage from './Pages/Homepage';
import Pricing from './Pages/Pricing';
import Product from './Pages/Product';
import AppLayout from './Pages/AppLayout'
import PageNotFound from './Pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='app' element={<AppLayout/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
